# Sistema Gerencial — v0.2.7

Versão focada em **Configurações e Parâmetros Gerenciais**, permitindo alterar regras e listas do ERP sem editar o código a cada mudança operacional.

## O que entrou

### Novo módulo Configurações
Disponível para perfis administrativos autorizados.

O módulo foi dividido em quatro blocos:

- Comercial
- Operação
- Financeiro
- Sistema

As alterações são gravadas na aba `Configuracoes`, atualizam o cache do backend e ficam registradas em `Logs_Sistema`.

### Parâmetros comerciais
- validade padrão da cotação;
- percentual FIPE padrão;
- mensalidade mínima padrão;
- taxa de adesão padrão;
- desconto máximo do Consultor;
- desconto máximo Administrativo;
- opções de rastreador;
- status de Cotação.

### Parâmetros operacionais
- tipos de Evento;
- etapas do Kanban;
- status de Evento;
- prioridades;
- categorias de Compra;
- status de Compra;
- tipos de Vistoria / Regulação;
- status técnico.

### Parâmetros financeiros
- formas de pagamento;
- status financeiro;
- categorias de despesa;
- centros de custo;
- valor de referência para atenção gerencial em Compras.

### Parâmetros de sistema
- perfis de usuário;
- funções de Voluntário;
- origens de Compra;
- prefixo de Evento;
- obrigatoriedade de telefone em nova Cotação.

### Integrações dinâmicas
A v0.2.7 passa a consumir as configurações em formulários importantes, incluindo:

- Cotações;
- Eventos;
- Kanban;
- Compras;
- Financeiro;
- Vistorias / Regulação;
- Voluntários;
- Usuários.

## Atualização no GitHub
Substitua:

- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Atualização no Apps Script

1. Substitua todo o conteúdo atual do `Code.gs` pelo arquivo `APPS_SCRIPT_V027_COMPLETO.gs`.
2. Salve.
3. Execute somente a função `migrarBancoV027`.
4. Aguarde a execução terminar com sucesso.
5. Confira a aba `Configuracoes`.
6. Publique uma **New version** do deployment.
7. Atualize o ERP com `Ctrl + F5`.

A migração cria apenas parâmetros ausentes e não apaga os valores já existentes.

**Não execute `setupBancoERP`.**
