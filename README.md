# Sistema Gerencial — v0.2.5.1

Versão com **Planos Comerciais e Cotações Avançadas**.

## Atualização no GitHub

Substitua estes arquivos:

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Atualização no Apps Script

1. Abra o Apps Script.
2. Substitua todo o `Code.gs` pelo arquivo `APPS_SCRIPT_V025_COMPLETO.gs`.
3. Salve.
4. Execute apenas `migrarBancoV025`.
5. Confirme que a aba `Planos` foi criada e que `Cotacoes` recebeu as novas colunas.
6. Publique uma **New version** do deploy.

Não execute `setupBancoERP`.

## O que entrou

- Novo módulo `Planos Comerciais`.
- Percentual por plano.
- Mensalidade mínima.
- Adesão por plano.
- Faixa mínima e máxima de FIPE.
- Regra de rastreador obrigatório e valor adicional.
- Limite de desconto por plano e por perfil.
- Cálculo de mensalidade base, adicionais, rastreador, desconto e mensalidade final.
- Validade da cotação e status de expiração visual.
- Proposta comercial pronta para impressão.
- Aprovação de cotação e conversão usando a mensalidade final.
- Validações de duplicidade para e-mail de usuário, CPF/CNPJ de associado e consultor/regional e CNPJ de oficina.
- Backup administrativo inclui Cotações e Planos.

## Teste recomendado

1. Execute `migrarBancoV025`.
2. Crie um plano comercial.
3. Abra uma nova cotação e consulte a FIPE.
4. Selecione o plano.
5. Teste desconto, rastreador e mensalidade final.
6. Salve e abra os detalhes.
7. Use `Proposta` para imprimir.
8. Aprove e converta em veículo.


## v0.2.5.1 — Cooperativas, Voluntários, Perfis e Compras multi-origem

- FIPE: exibe `32000` como `0 km`, guarda referência e diferencia 0 km/usado.
- Cooperativas: entidade própria de base comercial, com gerente, Voluntários e indicadores.
- Voluntários: funções Consultor ou Gerente, vinculados a uma Cooperativa.
- Cotações: registram Voluntário e Cooperativa separadamente, herdando o vínculo.
- Perfil Comercial separado do Operacional: Consultor vê apenas suas cotações; Gerente vê somente a própria Cooperativa.
- Grupos de Permissão: estrutura base com escopo PRÓPRIO, COOPERATIVA ou GLOBAL.
- Compras: origem Evento ou Financeiro/Administrativo; Evento exige vínculo e compra administrativa exige finalidade.
- Compatibilidade: campos legados `consultor` e `regional` são preservados durante a transição.

### Migração

No Apps Script, substitua pelo `APPS_SCRIPT_V0251_COMPLETO.gs`, salve, execute **somente** `migrarBancoV0251` e publique uma New version do deployment. Não execute `setupBancoERP`.
