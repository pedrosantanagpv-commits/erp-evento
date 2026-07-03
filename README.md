# Sistema Gerencial — v0.1.9

Versão focada em **Backup, Exportação Geral e Manutenção Administrativa**.

## Novidades

- Novo menu **Manutenção**;
- Painel de saúde do banco, com contagem por tabela;
- Status da API direto na tela de manutenção;
- Backup geral em JSON;
- Exportação individual por tabela em CSV;
- Exportação geral dos CSVs principais;
- Resumo de manutenção em CSV;
- Últimas ações de auditoria com leitura da aba `Logs_Sistema`;
- Orientação de segurança antes de migrações, limpezas e importações grandes.

## Subir no GitHub

Substitua no repositório:

```txt
index.html
api/erp.js
package.json
README.md
```

## Apps Script

Não precisa alterar o Apps Script se você já aplicou a versão anterior com `excluir_definitivo` e a aba `Financeiro`.

## Atenção

Não rode `setupBancoERP`.

A tela de manutenção não executa limpeza automática. Ela foi feita para backup, auditoria, exportação e conferência antes de alterações importantes.
