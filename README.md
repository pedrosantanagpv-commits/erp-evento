# Sistema Gerencial — v0.2.3.1

Versão focada em responsividade, tabelas e performance visual.

## O que mudou

- Paginação nas principais tabelas do sistema.
- Seleção de quantidade por página: 10, 25 ou 50 registros.
- Cabeçalhos de tabela mais estáveis durante rolagem horizontal/vertical.
- Ações de linha mais compactas e organizadas.
- Melhor responsividade para notebook, tablet e telas menores.
- Ajuste visual em tabelas, estados vazios e painéis de listagem.
- Melhor prevenção visual contra telas muito longas quando houver muitos registros importados.

## Arquivos para substituir no GitHub

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Observações

Não precisa mexer no Apps Script e não rode `setupBancoERP`.


## Correção v0.2.3.1

- Corrigido erro `pager is not defined` no módulo Eventos.
- Paginação do módulo Reclamações também foi padronizada.
