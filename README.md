# ERP Evento MVP v0.0.9

Versão focada no módulo de **Reclamações / SAC**, adicionando controle de tratativas, responsáveis e prazos de resposta.

## O que entrou nesta versão

- Novo menu **Reclamações** no ERP.
- Cadastro de reclamação/SAC com associado, telefone, placa, origem, categoria, prioridade, status, responsável, prazo, descrição e tratativa.
- Listagem com filtros por busca geral, status, prioridade, categoria e situação de prazo.
- Cards de resumo: total, abertas, atenção, atrasadas e resolvidas/finalizadas.
- Detalhes da reclamação com vínculo por placa/associado para veículo e eventos relacionados.
- Edição de reclamação.
- Marcar reclamação como resolvida.
- Cancelamento lógico da reclamação.
- Indicador de prazo: No prazo, Atenção, Atrasada, Sem prazo ou Encerrado.
- Integração com a aba `Reclamacoes` já criada no Google Sheets.

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
2. Abrir o menu **Reclamações**.
3. Clicar em **Nova reclamação**.
4. Cadastrar uma reclamação vinculando placa e associado.
5. Conferir o prazo e status na listagem.
6. Abrir **Detalhes** e conferir veículo/eventos relacionados.
7. Editar a tratativa.
8. Marcar como resolvida.
9. Confirmar se o dashboard atualiza o card de reclamações.

## Atenção

Não execute `setupBancoERP` depois que começar a cadastrar dados reais, porque essa função recria/limpa as abas iniciais do banco.
