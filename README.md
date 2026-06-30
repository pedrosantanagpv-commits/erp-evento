# ERP Evento MVP

Primeira interface do ERP de proteção veicular usando:

- Front-end em HTML/CSS/JS
- Vercel para hospedagem
- Vercel Serverless Function como proxy
- Google Apps Script como API
- Google Sheets como banco inicial

## Arquivos principais

- `index.html`: interface completa inicial com login, dashboard, veículos, eventos e kanban.
- `api/erp.js`: proxy da Vercel para conversar com o Apps Script sem problema de CORS.
- `package.json`: metadados do projeto.

## URL da API do Apps Script

A URL já está configurada em `api/erp.js`:

```js
https://script.google.com/macros/s/AKfycbzdCI-7c_60QLAd4oRvPli65t4ITKx82l51M6hMEi0y-saGrNEYR0Se4ZHO3bHMkrh33g/exec
```

No Vercel, também é possível criar uma variável de ambiente chamada:

```txt
GOOGLE_SCRIPT_URL
```

com essa mesma URL.

## Como subir no GitHub

1. Crie um novo repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. No Vercel, clique em `New Project`.
4. Importe o repositório.
5. Faça o deploy.

## Login inicial

```txt
E-mail: admin@gpv.com
Senha: 123456
```

## Importante

Não use dados reais ainda. A API está com `EXIGIR_TOKEN: false` no Apps Script para facilitar os testes. Antes de colocar dados reais, o ideal é proteger melhor a API, ocultar hash de senha nas listagens e ligar a exigência de token.
