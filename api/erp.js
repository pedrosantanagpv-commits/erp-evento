import crypto from 'node:crypto';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || process.env.GAS_URL || '';
const CLIENT_ID = process.env.CLIENT_ID || '';
const API_SHARED_SECRET = process.env.API_SHARED_SECRET || '';
const COOKIE_NAME = process.env.ERP_COOKIE_NAME || 'erp_session';
const SESSION_MAX_AGE_SECONDS = Number(process.env.SESSION_MAX_AGE_SECONDS || 28800);

function sendJson(res, status, data, extraHeaders = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  Object.entries(extraHeaders).forEach(([key, value]) => res.setHeader(key, value));
  res.end(JSON.stringify(data));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body); }
  catch { return {}; }
}

function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((acc, item) => {
    const index = item.indexOf('=');
    if (index === -1) return acc;
    const key = item.slice(0, index).trim();
    const value = item.slice(index + 1).trim();
    if (key) acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
}

function buildSessionCookie(token, maxAge = SESSION_MAX_AGE_SECONDS) {
  const secure = process.env.NODE_ENV === 'development' ? '' : '; Secure';
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly${secure}; SameSite=Strict; Max-Age=${maxAge}`;
}

function clearSessionCookie() {
  const secure = process.env.NODE_ENV === 'development' ? '' : '; Secure';
  return `${COOKIE_NAME}=; Path=/; HttpOnly${secure}; SameSite=Strict; Max-Age=0`;
}

function sanitizeRecord(value) {
  if (Array.isArray(value)) return value.map(sanitizeRecord);
  if (!value || typeof value !== 'object') return value;
  const clean = {};
  for (const [key, item] of Object.entries(value)) {
    if (['senha_hash', 'token', 'token_expira_em'].includes(key)) continue;
    clean[key] = sanitizeRecord(item);
  }
  return clean;
}

function stableStringify(value) {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  const keys = Object.keys(value).sort();
  return `{${keys.map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
}

function randomId(prefix = 'REQ') {
  return `${prefix}-${Date.now()}-${crypto.randomBytes(8).toString('hex')}`;
}

function normalizeJsonPayload(value) {
  // Garante que o conteúdo assinado seja exatamente o mesmo conteúdo
  // que será transmitido por JSON.stringify para o Apps Script.
  return JSON.parse(JSON.stringify(value));
}

function signEnvelope(method, payload, requestId) {
  const now = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(18).toString('hex');
  const envelope = normalizeJsonPayload({
    ...payload,
    client_id: CLIENT_ID,
    _sig_ts: now,
    _sig_nonce: nonce,
    _request_id: requestId
  });
  const canonical = `${method.toUpperCase()}\n${stableStringify(envelope)}`;
  const signature = crypto
    .createHmac('sha256', API_SHARED_SECRET)
    .update(canonical, 'utf8')
    .digest('hex');
  return { ...envelope, _sig: signature };
}

function assertEnvironment() {
  const missing = [];
  if (!GOOGLE_SCRIPT_URL) missing.push('GOOGLE_SCRIPT_URL');
  if (!CLIENT_ID) missing.push('CLIENT_ID');
  if (!API_SHARED_SECRET) missing.push('API_SHARED_SECRET');
  if (missing.length) throw new Error(`Variáveis obrigatórias ausentes: ${missing.join(', ')}`);
}

function getBrandConfig() {
  return {
    appName: process.env.ERP_APP_NAME || 'Sistema Gerencial',
    appSubtitle: process.env.ERP_APP_SUBTITLE || 'Operação Veicular',
    companyName: process.env.ERP_COMPANY_NAME || 'Cliente / Operação',
    logoText: process.env.ERP_LOGO_TEXT || 'SG',
    logoUrl: process.env.ERP_LOGO_URL || '',
    documentTitle: process.env.ERP_DOCUMENT_TITLE || process.env.ERP_APP_NAME || 'Sistema Gerencial',
    loginEyebrow: process.env.ERP_LOGIN_EYEBROW || 'Plataforma gerencial',
    loginTitle: process.env.ERP_LOGIN_TITLE || 'Gestão operacional com visão centralizada.',
    loginDescription: process.env.ERP_LOGIN_DESCRIPTION || 'Estrutura gerencial para organizar base, veículos, eventos, vistorias, compras, financeiro e relatórios.',
    footerNote: process.env.ERP_FOOTER_NOTE || 'Ambiente operacional',
    environment: process.env.ERP_ENVIRONMENT || 'Production',
    colors: {
      accent: process.env.ERP_COLOR_ACCENT || '#8b98a7',
      accentStrong: process.env.ERP_COLOR_ACCENT_STRONG || '#cbd5e1',
      sidebar: process.env.ERP_COLOR_SIDEBAR || '#05070a',
      background: process.env.ERP_COLOR_BACKGROUND || '#0b0f14',
      surface: process.env.ERP_COLOR_SURFACE || '#121821'
    }
  };
}

async function callAppsScript(method, payload, attempts = 3) {
  assertEnvironment();
  const requestId = randomId();
  let lastError = null;
  let lastStatus = 500;
  let lastRaw = '';

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      const signed = signEnvelope(method, payload, requestId);
      let targetUrl = GOOGLE_SCRIPT_URL;
      const options = {
        method,
        redirect: 'follow',
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          'X-ERP-Proxy-Attempt': String(attempt)
        }
      };

      if (method === 'GET') {
        const query = new URLSearchParams();
        Object.entries(signed).forEach(([key, value]) => {
          if (value === undefined || value === null) return;
          query.set(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
        });
        targetUrl += `${targetUrl.includes('?') ? '&' : '?'}${query.toString()}`;
      } else {
        options.headers['Content-Type'] = 'text/plain;charset=utf-8';
        options.body = JSON.stringify(signed);
      }

      const response = await fetch(targetUrl, options);
      lastStatus = response.status;
      lastRaw = await response.text();

      let data;
      try { data = JSON.parse(lastRaw); }
      catch (error) {
        lastError = error;
        if (attempt < attempts) {
          await sleep(450 * attempt);
          continue;
        }
        throw error;
      }

      return { status: response.ok ? 200 : response.status, data, requestId };
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
    requestId,
    data: {
      success: false,
      message: 'A API do Apps Script não respondeu corretamente após novas tentativas.',
      detail: lastError?.message || '',
      raw: String(lastRaw || '').slice(0, 400),
      request_id: requestId
    }
  };
}

function requiresSession(method, action) {
  if (method === 'GET') return !['ping', 'brand'].includes(action);
  return !['login'].includes(action);
}

export default async function handler(req, res) {
  try {
    const method = String(req.method || 'GET').toUpperCase();
    const url = new URL(req.url, 'http://localhost');
    const queryObject = Object.fromEntries(url.searchParams.entries());
    const bodyObject = parseBody(req);
    const action = method === 'GET' ? (queryObject.action || 'ping') : (bodyObject.action || '');

    if (method === 'GET' && action === 'brand') {
      return sendJson(res, 200, { success: true, data: getBrandConfig(), client_id: CLIENT_ID || null });
    }

    const cookies = parseCookies(req.headers.cookie || '');
    const sessionToken = cookies[COOKIE_NAME] || '';

    if (requiresSession(method, action) && !sessionToken) {
      return sendJson(res, 401, {
        success: false,
        message: 'Sessão ausente ou expirada. Faça login novamente.'
      });
    }

    if (method === 'GET') {
      const payload = { ...queryObject };
      delete payload.token;
      if (sessionToken) payload.token = sessionToken;
      const result = await callAppsScript('GET', payload);
      return sendJson(res, result.status, sanitizeRecord(result.data), { 'X-Request-Id': result.requestId });
    }

    if (method === 'POST') {
      if (!action) return sendJson(res, 400, { success: false, message: 'Informe a action.' });
      const payload = { ...bodyObject };
      delete payload.token;
      if (sessionToken) payload.token = sessionToken;

      const result = await callAppsScript('POST', payload);
      const headers = { 'X-Request-Id': result.requestId };

      if (action === 'login' && result.data?.success && result.data?.token) {
        headers['Set-Cookie'] = buildSessionCookie(result.data.token);
        result.data.session_expires_at = result.data.token_expira_em || null;
      }

      if (action === 'logout') {
        headers['Set-Cookie'] = clearSessionCookie();
      }

      return sendJson(res, result.status, sanitizeRecord(result.data), headers);
    }

    return sendJson(res, 405, { success: false, message: 'Método não permitido.' });
  } catch (error) {
    return sendJson(res, 500, {
      success: false,
      message: error.message || 'Erro interno no proxy da Vercel.'
    });
  }
}
