# Sistema Gerencial — v0.1.7

Versão focada em **Importação de Dados** para facilitar a alimentação inicial e manutenção da base.

## Novidades da v0.1.7

- Novo menu **Importação**;
- Importação por arquivo `.csv`, `.tsv` ou `.txt`;
- Importação por colagem direta de dados;
- Detecção automática de delimitador: ponto e vírgula, vírgula ou TAB;
- Pré-visualização antes de importar;
- Modelos CSV para cada tabela;
- Reconhecimento de alguns cabeçalhos equivalentes, como `cpf`, `cnpj`, `fipe`, `vencimento`, `combustivel` etc.;
- Importação segura usando a API existente, sem mexer no banco;
- Suporte para importar:
  - Associados;
  - Veículos;
  - Eventos;
  - Financeiro;
  - Consultores / Regionais;
  - Oficinas;
  - Compras;
  - Vistorias / Regulação.

## Atualização

Substitua no GitHub:

```txt
index.html
api/erp.js
package.json
README.md
```

Não precisa mexer no Apps Script e **não rode `setupBancoERP`**.

## Teste recomendado

1. Entre como Super Admin.
2. Abra o menu **Importação**.
3. Escolha a tabela **Veículos**.
4. Clique em **Baixar modelo CSV**.
5. Edite o modelo com 1 ou 2 linhas de teste.
6. Volte ao ERP e importe o arquivo.
7. Confira em **Veículos** se os registros foram criados.
8. Repita com **Financeiro** ou **Associados**.

## Observação

Para importações grandes, prefira lotes menores. Como o back-end atual usa Apps Script + Sheets, o ideal nesta fase é importar em blocos controlados.
