# ERP Evento MVP v0.1.4

Versão gerencial com novo módulo **Financeiro Gerencial Básico**.

## Principais melhorias

- Novo menu **Financeiro**.
- Cadastro de lançamentos financeiros vinculados a veículos.
- Controle de competência, vencimento, valor mensalidade, valor pago, status e forma de pagamento.
- Status: Aberto, Pago, Atrasado e Cancelado.
- Cálculo gerencial de receita prevista, recebida, aberta e atrasada.
- Exportação CSV do financeiro.
- Detalhes financeiros vinculados ao veículo.
- Dashboard com indicadores financeiros.

## Arquivos para substituir no GitHub

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Apps Script

Esta versão precisa de uma migração segura no Apps Script para criar a aba `Financeiro` e liberar a tabela na API.

Leia o arquivo:

- `APPS_SCRIPT_V014.md`

Não execute `setupBancoERP`.

## Teste recomendado

1. Aplicar o ajuste do `APPS_SCRIPT_V014.md` no Apps Script.
2. Fazer novo deploy do Apps Script.
3. Subir esta versão no GitHub e aguardar a Vercel.
4. Abrir o menu **Financeiro**.
5. Criar um lançamento vinculado a um veículo.
6. Marcar como pago.
7. Conferir o Dashboard e os detalhes do veículo.
8. Exportar CSV.
