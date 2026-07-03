# Sistema Gerencial — v0.1.6

Versão focada em acabamento comercial e estrutura white label.

## O que mudou

- Visual dark/premium com tons de grafite, preto e cinza.
- Redução do destaque amarelo.
- Login mais comercial e menos técnico.
- Botão **Sair** fixo no rodapé da sidebar.
- Menu lateral com rolagem própria.
- Nova tela **Sobre**, com informações do sistema, usuário, versão, API e marca.
- `BRAND_CONFIG` ampliado para facilitar personalização por cliente.
- Melhor responsividade para notebook, tablet e telas menores.
- Textos mais genéricos para venda white label.

## Arquivos para substituir no GitHub

```txt
index.html
api/erp.js
package.json
README.md
```

## Personalização white label

No `index.html`, procure o bloco:

```js
const BRAND_CONFIG = {
  appName: 'Sistema Gerencial',
  appSubtitle: 'Operação Veicular',
  companyName: 'Cliente / Operação',
  logoText: 'SG',
  logoUrl: '',
  documentTitle: 'Sistema Gerencial'
};
```

Para outro cliente, altere apenas os textos, cores e `logoUrl`, se houver uma logo hospedada.

## Importante

Não precisa mexer no Apps Script.
Não rode `setupBancoERP`.
Essa atualização é apenas front-end/Vercel.
