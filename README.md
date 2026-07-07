# Sistema Gerencial — v0.2.6

Versão focada em **performance, tempo de resposta e responsividade percebida**, mantendo a estrutura funcional da v0.2.5.2.

## O que entrou

### Cache no Apps Script
- cache de Configurações, Planos, Cooperativas, Voluntários, Oficinas e Grupos de Permissão;
- invalidação automática do cache após criar, editar, inativar ou excluir registros;
- cache das consultas FIPE para marcas, modelos, anos e valores;
- cache curto do resumo do Dashboard.

### Bootstrap de inicialização
Após o login, o ERP busca em uma chamada agrupada:
- opções/configurações;
- Planos;
- Cooperativas;
- Voluntários;
- Oficinas;
- Grupos de Permissão;
- Permissões dos grupos.

Isso reduz chamadas repetidas durante a navegação inicial.

### Cache inteligente no front-end
- cache local com validade curta;
- reutilização imediata de dados já carregados;
- atualização em segundo plano quando o cache vence;
- deduplicação de requisições GET simultâneas;
- invalidação automática após gravações.

### Proteção contra clique duplo
Requisições POST idênticas que ainda estão em andamento são reutilizadas, reduzindo risco de cadastros duplicados por múltiplos cliques.

### Dashboard em duas etapas
- primeiro carrega um resumo rápido de indicadores;
- gráficos, alertas e dados detalhados são atualizados em seguida.

### Preparação para escala
Foi adicionada a rota `listar_paginado`, que prepara a API para paginação real no backend em bases maiores.

## Atualização no GitHub
Substitua:
- `index.html`
- `api/erp.js`
- `package.json`
- `README.md`

## Atualização no Apps Script
1. Substitua todo o `Code.gs` pelo arquivo `APPS_SCRIPT_V026_COMPLETO.gs`.
2. Salve.
3. Publique uma **New version** do deployment.

Não há migração de banco nesta versão.

**Não execute `setupBancoERP`.**
