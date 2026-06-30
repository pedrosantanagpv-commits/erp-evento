# ERP Evento MVP v0.0.5

Versão focada na **Central de Eventos**, transformando o módulo de eventos em uma tela operacional para acompanhamento de ocorrências de proteção veicular.

## O que entrou nesta versão

- Central do evento com visual mais completo.
- Linha de fluxo do evento: Aberto, Análise, Vistoria, Regulação, Compras, Reparo, Aguardando Aprovação e Finalizado.
- Indicador de prazo: Dentro do prazo, Atenção, Atrasado ou Encerrado.
- Dias em aberto calculados automaticamente.
- Botões de ação rápida dentro do evento:
  - Enviar para vistoria
  - Enviar para regulação
  - Enviar para compras
  - Enviar para reparo
  - Finalizar evento
  - Recusar evento
- Comentários internos salvos no histórico do evento.
- Timeline visual do histórico.
- Criação de solicitação de compra a partir do evento.
- Compras vinculadas ao evento aparecem dentro da Central do Evento.
- Kanban com prazo/dias em aberto nos cards.
- Botão de “Central” no lugar de apenas “Detalhes” nos eventos.

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
2. Abrir Eventos.
3. Clicar em Central no evento teste.
4. Adicionar comentário interno.
5. Usar uma ação rápida, como Enviar para vistoria.
6. Conferir a timeline.
7. Criar uma solicitação de compra pelo botão Compra.
8. Conferir se a compra aparece na Central do Evento.
9. Abrir o Kanban e conferir a etapa atualizada.

## Atenção

Não execute `setupBancoERP` depois que começar a cadastrar dados reais, porque essa função recria/limpa as abas iniciais do banco.
