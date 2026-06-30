
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzdCI-7c_60QLAd4oRvPli65t4ITKx82l51M6hMEi0y-saGrNEYR0Se4ZHO3bHMkrh33g/exec';

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
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
      const targetUrl = query ? `${GOOGLE_SCRIPT_URL}?${query}` : GOOGLE_SCRIPT_URL;

      const response = await fetch(targetUrl, {
        method: 'GET',
        redirect: 'follow'
      });

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (error) {
        data = {
          success: false,
          message: 'A API do Apps Script não retornou JSON válido.',
          raw: text
        };
      }

      return sendJson(res, response.ok ? 200 : response.status, data);
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string'
        ? req.body
        : JSON.stringify(req.body || {});

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body
      });

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (error) {
        data = {
          success: false,
          message: 'A API do Apps Script não retornou JSON válido.',
          raw: text
        };
      }

      return sendJson(res, response.ok ? 200 : response.status, data);
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
