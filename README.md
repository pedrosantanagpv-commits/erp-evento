# ERP Evento MVP v0.1.3

Versão gerencial focada na integração entre cadastros principais do ERP de proteção veicular.

## Principais melhorias

- Veículos agora podem ser vinculados a consultores/regionais cadastrados.
- Ao selecionar consultor no veículo, o sistema preenche regional e cooperativa automaticamente.
- Eventos agora podem selecionar oficina cadastrada.
- Detalhes do consultor/regional com carteira vinculada, FIPE total e mensalidade prevista.
- Detalhes da oficina com eventos, registros técnicos, valores orçados e aprovados.
- Relatórios com novas visões: carteira por consultor/regional e eventos por oficina.
- Mantém o foco gerencial: sem WhatsApp, atendimento ou templates de comunicação.

## Arquivos para substituir no GitHub

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Importante

Não execute `setupBancoERP`. Esta atualização não altera a estrutura do banco nem exige mudança no Apps Script.

## Teste recomendado

1. Abrir Consultores e criar um consultor/regional com regional e cooperativa.
2. Abrir Veículos, editar um veículo e selecionar o consultor cadastrado.
3. Confirmar que regional e cooperativa foram preenchidas automaticamente.
4. Abrir Oficinas e criar uma oficina.
5. Abrir Eventos, editar/criar evento e selecionar a oficina cadastrada.
6. Abrir detalhes do consultor e conferir FIPE/mensalidade da carteira.
7. Abrir detalhes da oficina e conferir eventos vinculados.
8. Abrir Relatórios e conferir carteira por consultor e eventos por oficina.
