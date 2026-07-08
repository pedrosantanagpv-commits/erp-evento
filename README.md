# ERP Core v0.3.0 — Release Comercial

A v0.3.0 consolida o ERP para implantação comercial assistida, mantendo o modelo de um ambiente isolado por cliente: Vercel, Apps Script, Sheets, segredos e backups próprios.

## Destaques
- correção visual de tabelas e listas internas em modais escuros;
- Saúde do Sistema com API, planilha, assinatura, backups e versões;
- Central de Logs com filtros por usuário, módulo, resultado e busca;
- histórico de backups e registro explícito de teste de restauração;
- histórico de versões e migrações por cliente;
- checklist de implantação dentro do ERP;
- redefinição administrativa com senha temporária;
- troca obrigatória de senha no primeiro acesso;
- encerramento de sessão quando usuário é inativado ou token expira;
- validações adicionais de vínculo de Voluntário, Gerente e Veículo;
- painel administrativo do ambiente com indicadores de suporte.

## Atualização
1. GitHub/Vercel: substitua `index.html`, `api/erp.js`, `package.json` e `README.md`.
2. Apps Script: substitua todo o `Code.gs` por `APPS_SCRIPT_V030_COMPLETO.gs`.
3. Execute somente `migrarBancoV030`.
4. Publique uma New version do deployment do Apps Script.
5. Faça redeploy da Vercel se alterar Environment Variables.
6. Teste login, troca de senha temporária, Administração do Ambiente e módulos principais.

**Nunca execute `setupBancoERP` em uma planilha com dados reais.**


## Hotfix v0.3.0.1 — assinatura de POST

Corrige divergência de assinatura em payloads POST mais complexos, especialmente em Compras.

- normaliza o envelope JSON antes da assinatura no proxy Vercel;
- força UTF-8 explicitamente no HMAC do Apps Script;
- não altera banco de dados;
- não exige migração.

### Atualização
1. Substitua `api/erp.js` no GitHub e faça o deploy/redeploy da Vercel.
2. Substitua o `Code.gs` pelo `APPS_SCRIPT_V030_COMPLETO.gs` deste pacote.
3. Salve e publique uma **New version** do Apps Script.
4. Não execute migração.


## Atualização adicional do hotfix
- Kanban de Eventos agora aceita arrastar e soltar cartões entre etapas no desktop.
- O movimento usa a mesma ação de backend já existente (`mover_evento_kanban`), registra comentário no histórico e preserva o botão Mover como alternativa.
- A etapa de destino define o status operacional correspondente quando houver mapeamento conhecido.
