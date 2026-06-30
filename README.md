# ERP Evento MVP v0.0.4

Versão operacional do MVP do ERP para proteção veicular.

## O que entrou nesta versão

- Tela de detalhes do associado.
- Veículos vinculados ao associado.
- Eventos relacionados ao associado.
- Tela de detalhes do veículo.
- Eventos vinculados ao veículo pela placa.
- Abertura/edição de evento com busca automática pela placa.
- Preenchimento automático de associado, telefone, cidade, estado e vínculo interno ao encontrar a placa.
- Tela de detalhes do evento.
- Histórico do evento alimentado ao mover no Kanban.
- Kanban com botão de mover etapa/status.
- Confirmações internas para inativar/cancelar, sem depender do alerta padrão do navegador.
- Botões de detalhes, edição, movimentação e cancelamento nas tabelas.
- Mantém a correção de valores no formato brasileiro, como `65.000,00`.
- Mantém proxy `/api/erp` na Vercel com novas tentativas automáticas quando o Apps Script oscila.

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
2. Abrir Associados e clicar em Detalhes.
3. Abrir Veículos e clicar em Detalhes.
4. Abrir Eventos e criar um evento digitando uma placa já cadastrada.
5. Usar o botão Buscar placa para puxar os dados automaticamente.
6. Abrir o Kanban e mover o evento de etapa.
7. Abrir Detalhes do evento e conferir o histórico.

## Atenção

Não execute `setupBancoERP` depois que começar a cadastrar dados reais, porque essa função recria/limpa as abas iniciais do banco.
