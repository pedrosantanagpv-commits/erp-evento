# Sistema Gerencial — v0.1.8.1

Versão de ajuste sobre a v0.1.8, com foco em usuários/permissões.

## Novidade principal

- Super Admin agora pode **excluir usuário definitivamente** pelo painel de Usuários.
- Usuários comuns continuam sem essa permissão.
- O próprio usuário logado não pode excluir a si mesmo.
- O sistema impede excluir o último Super Admin ativo.
- A ação fica registrada em `Logs_Sistema` como `excluir_definitivo`.

## Subir no GitHub

Substitua no repositório:

```txt
index.html
api/erp.js
package.json
README.md
```

## Apps Script

Esta versão também precisa atualizar o Apps Script para reconhecer a ação `excluir_definitivo`.

Use o arquivo:

```txt
APPS_SCRIPT_V0181_COMPLETO.gs
```

Abra o Apps Script, substitua o conteúdo do `Code.gs`, salve e faça um novo deploy em **Manage deployments > New version > Deploy**.

## Atenção

Não rode `setupBancoERP`.
