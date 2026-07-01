const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzdCI-7c_60QLAd4oRvPli65t4ITKx82l51M6hMEi0y-saGrNEYR0Se4ZHO3bHMkrh33g/exec';
const ENFORCE_PROXY_TOKEN = String(process.env.ENFORCE_PROXY_TOKEN || 'true').toLowerCase() !== 'false';

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.end(JSON.stringify(data));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body); }
  catch (error) { return {}; }
}

function sanitizeRecord(record, isTopLevel = false) {
  if (Array.isArray(record)) return record.map(item => sanitizeRecord(item, false));
  if (!record || typeof record !== 'object') return record;

  const clean = {};
  Object.keys(record).forEach(key => {
    if (key === 'senha_hash') return;
    if (!isTopLevel && (key === 'token' || key === 'token_expira_em')) return;
    clean[key] = sanitizeRecord(record[key], false);
  });

  return clean;
}

function sanitizeResponse(data) {
  // Mantém o token de login no topo da resposta, mas remove senha_hash/tokens de registros de usuário.
  return sanitizeRecord(data, true);
}

function shouldRequireToken(method, queryParams, body) {
  if (!ENFORCE_PROXY_TOKEN) return false;

  if (method === 'GET') {
    const action = queryParams.get('action') || 'ping';
    return action !== 'ping';
  }

  if (method === 'POST') {
    const action = body?.action || '';
    return action !== 'login';
  }

  return false;
}

async function callAppsScript(targetUrl, options = {}, attempts = 3) {
  let lastStatus = 500;
  let lastRaw = '';
  let lastError = null;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const response = await fetch(targetUrl, {
        redirect: 'follow',
        cache: 'no-store',
        ...options,
        headers: {
          ...(options.headers || {}),
          'Cache-Control': 'no-cache',
          'X-ERP-Proxy-Attempt': String(attempt)
        }
      });

      lastStatus = response.status;
      lastRaw = await response.text();

      try {
        const data = JSON.parse(lastRaw);
        return {
          status: response.ok ? 200 : response.status,
          data: sanitizeResponse(data)
        };
      } catch (parseError) {
        lastError = parseError;

        if (attempt < attempts) {
          await sleep(450 * attempt);
          continue;
        }
      }
    } catch (error) {
      lastError = error;

      if (attempt < attempts) {
        await sleep(450 * attempt);
        continue;
      }
    }
  }

  return {
    status: lastStatus || 500,
    data: {
      success: false,
      message: 'A API do Apps Script não retornou JSON válido após novas tentativas.',
      detail: lastError?.message || '',
      raw: String(lastRaw || '').slice(0, 500)
    }
  };
}

export default async function handler(req, res) {
  try {
    if (!GOOGLE_SCRIPT_URL) {
      return sendJson(res, 500, {
        success: false,
        message: 'GOOGLE_SCRIPT_URL não configurada no Vercel.'
      });
    }

    if (req.method === 'GET') {
      const query = req.url.includes('?') ? req.url.split('?')[1] : '';
      const queryParams = new URLSearchParams(query);

      if (shouldRequireToken('GET', queryParams, null) && !queryParams.get('token')) {
        return sendJson(res, 401, {
          success: false,
          message: 'Token não informado. Faça login novamente.'
        });
      }

      const separator = GOOGLE_SCRIPT_URL.includes('?') ? '&' : '?';
      const targetUrl = query
        ? `${GOOGLE_SCRIPT_URL}${separator}${query}`
        : `${GOOGLE_SCRIPT_URL}?_ts=${Date.now()}`;

      const result = await callAppsScript(targetUrl, { method: 'GET' });
      return sendJson(res, result.status, result.data);
    }

    if (req.method === 'POST') {
      const bodyObject = parseBody(req);

      if (shouldRequireToken('POST', null, bodyObject) && !bodyObject.token) {
        return sendJson(res, 401, {
          success: false,
          message: 'Token não informado. Faça login novamente.'
        });
      }

      const body = typeof req.body === 'string'
        ? req.body
        : JSON.stringify(req.body || {});

      const result = await callAppsScript(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body
      });

      return sendJson(res, result.status, result.data);
    }

    return sendJson(res, 405, {
      success: false,
      message: 'Método não permitido.'
    });
  } catch (error) {
    return sendJson(res, 500, {
      success: false,
      message: error.message || 'Erro interno no proxy da Vercel.'
    });
  }
}
