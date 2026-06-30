# ERP Evento MVP v0.0.3

Primeira base operacional do ERP para proteção veicular.

## O que tem nesta versão

- Login integrado ao Apps Script.
- Dashboard geral com indicadores da planilha.
- Módulo de Associados:
  - cadastrar associado;
  - listar associados;
  - editar associado;
  - inativar associado.
- Módulo de Veículos:
  - cadastrar veículo;
  - listar veículos;
  - editar veículo;
  - inativar veículo;
  - vínculo com associado cadastrado;
  - resumo de FIPE e mensalidade filtrada.
- Módulo de Eventos.
- Kanban de eventos.
- Proxy `/api/erp` na Vercel com novas tentativas automáticas quando o Apps Script oscila.
- Correção de valores em formato brasileiro, como `65.000,00`.

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

## Atenção

Não execute `setupBancoERP` depois que começar a cadastrar dados reais, porque essa função recria/limpa as abas iniciais do banco.
