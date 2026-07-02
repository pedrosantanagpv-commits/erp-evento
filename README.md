# ERP Evento MVP v0.1.2

Versão focada em cadastros gerenciais e organização operacional do ERP de proteção veicular.

## O que entrou

- Novo módulo **Consultores e Regionais**.
- Cadastro, edição, detalhes e inativação de consultores/regionais.
- Novo módulo **Oficinas**.
- Cadastro, edição, detalhes e inativação de oficinas credenciadas/prestadores operacionais.
- Dashboard sem foco em atendimento/SAC, com indicador de vistorias abertas, consultores ativos e oficinas ativas.
- Menu lateral mais alinhado ao ERP gerencial.
- Permissões atualizadas para os novos módulos.
- Mantida a base atual de usuários, eventos, vistorias, compras, kanban e relatórios.

## Arquivos para substituir no GitHub

Substitua estes arquivos:

```txt
index.html
api/erp.js
package.json
README.md
```

## Apps Script

Não precisa alterar o Apps Script nesta versão.

Não execute `setupBancoERP`.

## Teste recomendado

1. Entrar como Super Admin.
2. Abrir **Consultores**.
3. Criar um consultor/regional teste.
4. Editar e inativar o registro.
5. Abrir **Oficinas**.
6. Criar uma oficina teste.
7. Abrir detalhes e editar.
8. Voltar ao Dashboard e conferir os novos indicadores.
