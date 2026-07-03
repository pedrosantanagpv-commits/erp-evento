# Sistema Gerencial — v0.2.4

Versão com módulo de **Cotações** e consulta FIPE gratuita.

## Atualização no GitHub

Substitua estes arquivos no repositório:

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Atualização no Apps Script

Esta versão precisa atualizar o Apps Script para criar a aba `Cotacoes` e habilitar a consulta FIPE.

1. Abra o Apps Script.
2. Substitua o conteúdo do `Code.gs` pelo arquivo `APPS_SCRIPT_V024_COMPLETO.gs`.
3. Salve.
4. Execute apenas a função:

```txt
migrarBancoV024
```

5. Faça novo deploy do Apps Script em **New version**.
6. Aguarde a Vercel publicar o front-end.

Não rode `setupBancoERP`.

## O que entrou

- Novo menu `Cotações`.
- Consulta de marcas, modelos, anos e valor FIPE usando provedor gratuito.
- Cálculo de mensalidade por percentual sobre FIPE.
- Histórico de cotações.
- Conversão de cotação em veículo.
- Nova aba `Cotacoes`.

## Observação

O provedor gratuito pode ter limites e oscilações. Para operação comercial em volume, a estrutura já permite trocar o provedor no Apps Script sem alterar o módulo inteiro.
