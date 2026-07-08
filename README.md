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
