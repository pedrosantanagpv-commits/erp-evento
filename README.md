# Sistema Gerencial — v0.2.0 Beta Comercial White Label

Versão beta comercial com foco em organização de produto, implantação e apresentação white label.

## Principais mudanças

- Menu lateral reorganizado por grupos: Visão geral, Base, Operação, Gestão e Administração.
- Novo módulo **Implantação** com checklist para configurar uma nova operação.
- Painel executivo com nomenclatura mais comercial e genérica.
- Estrutura white label reforçada via `BRAND_CONFIG` no `index.html`.
- Mantém os módulos existentes: associados, veículos, consultores, oficinas, eventos, vistorias, compras, financeiro, kanban, relatórios, importação, usuários e manutenção.
- Não exige alteração no Apps Script se a versão anterior já estiver aplicada.

## Arquivos para substituir no GitHub

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Observações

Não rode `setupBancoERP`.

A atualização é de front-end e organização comercial. O banco atual será mantido.

## Configuração white label

A identidade visual fica centralizada no objeto `BRAND_CONFIG`, dentro do `index.html`.

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

Para outro cliente, altere esse bloco e publique novamente na Vercel.
