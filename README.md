# Sistema Gerencial MVP v0.1.5

Versão com repaginação visual premium escura e estrutura white label.

## Foco da versão

- Tema dark/grafite mais profissional.
- Redução forte do uso de amarelo.
- Sidebar com área de menu rolável.
- Rodapé da sidebar fixo com usuário e botão Sair.
- Identidade visual centralizada em `BRAND_CONFIG`.
- Textos comerciais removidos ou generalizados para uso white label.

## Como personalizar para outro cliente

Abra o arquivo `index.html` e procure por:

```js
const BRAND_CONFIG = {
  appName: 'Sistema Gerencial',
  appSubtitle: 'Operação Veicular',
  logoText: 'SG',
  documentTitle: 'Sistema Gerencial'
};
```

Altere esses campos para o nome, subtítulo e marca do cliente. A estrutura do sistema continua a mesma.

## Atualização

Substitua no GitHub:

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

Não rode `setupBancoERP`.
Não é necessário mexer no Apps Script para esta versão, desde que a v0.1.4 já esteja funcionando.
