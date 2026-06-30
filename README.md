# ERP Evento MVP v0.0.7

Versão focada no módulo operacional de **Compras**, conectado à Central de Eventos.

## O que entrou nesta versão

- Novo menu **Compras** no ERP.
- Tela de controle de compras com resumo de total, pendentes, aguardando aprovação, entregues e valor filtrado.
- Cadastro de compra avulsa ou vinculada a um evento.
- Edição de compra, fornecedor, valores, responsável, status e observações.
- Detalhes da compra com vínculo direto para abrir o evento.
- Botão para marcar compra como entregue.
- Cancelamento lógico de compras, sem apagar da planilha.
- Compras aparecem com botão de abertura dentro da Central do Evento.
- Ao criar compra vinculada, o evento pode ser movimentado para a etapa **Compras** automaticamente.
- Integração com a aba `Compras` já criada no Google Sheets.

## Arquivos principais

```txt
index.html
api/erp.js
package.json
README.md
```

## URL do Apps Script

A API usada por padrão é:

```txt
https://script.google.com/macros/s/AKfycbzdCI-7c_60QLAd4oRvPli65t4ITKx82l51M6hMEi0y-saGrNEYR0Se4ZHO3bHMkrh33g/exec
```

Na Vercel, você pode configurar a variável:

```txt
GOOGLE_SCRIPT_URL
```

## Login inicial

```txt
E-mail: admin@gpv.com
Senha: 123456
```

## Teste recomendado

1. Entrar no ERP.
2. Abrir o menu **Compras**.
3. Criar uma compra vinculada a um evento.
4. Conferir se ela aparece na tabela de compras.
5. Abrir os detalhes da compra.
6. Editar fornecedor, valores e status.
7. Marcar a compra como entregue.
8. Abrir a Central do Evento e conferir se a compra aparece vinculada.

## Atenção

Não execute `setupBancoERP` depois que começar a cadastrar dados reais, porque essa função recria/limpa as abas iniciais do banco.
