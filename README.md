# Sistema Gerencial — v0.2.4.1

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


## Correção v0.2.4.1

Incluído `FIPE_CONFIG` no Apps Script para corrigir o erro `FIPE_CONFIG is not defined` ao carregar marcas/modelos da FIPE.


## Hotfix v0.2.4.3 — Placa única

- Bloqueio de placa duplicada no backend.
- Validação também na conversão de cotação em veículo.
- Normalização de placa antes da comparação.
- Lock no cadastro de veículos para reduzir risco de duplicidade em requisições simultâneas.
