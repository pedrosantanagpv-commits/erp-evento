# ERP Evento MVP v0.0.6

Versão focada no módulo técnico de **Vistorias e Regulação**, conectado à Central de Eventos.

## O que entrou nesta versão

- Novo menu **Vistorias** no ERP.
- Tela de controle técnico com resumo de total, em aberto, finalizados e valor aprovado filtrado.
- Cadastro de vistoria/regulação vinculado a um evento.
- Edição e cancelamento de registros técnicos.
- Detalhes técnicos com parecer, valores, entrada, saída e vínculo com o evento.
- Botões dentro da Central do Evento para criar **Vistoria** ou **Regulação**.
- Vistorias/regulações vinculadas aparecem dentro da Central do Evento.
- Ao criar uma vistoria/regulação, o evento é movimentado automaticamente para a etapa correspondente.
- Integração com a aba `Vistorias_Regulacao` já criada no Google Sheets.

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
2. Abrir a Central de um evento.
3. Clicar em **Vistoria** e criar um registro técnico.
4. Conferir se o evento mudou para a etapa de Vistoria.
5. Abrir o menu **Vistorias**.
6. Abrir os detalhes do registro técnico.
7. Editar o parecer ou valores.
8. Voltar na Central do Evento e conferir se o registro aparece vinculado.

## Atenção

Não execute `setupBancoERP` depois que começar a cadastrar dados reais, porque essa função recria/limpa as abas iniciais do banco.
