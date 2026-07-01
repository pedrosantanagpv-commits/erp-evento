# ERP Evento MVP v0.1.0

ERP web para gestão de proteção veicular usando:

- Front-end estático na Vercel;
- Proxy serverless em `/api/erp`;
- Google Apps Script como API;
- Google Sheets como banco inicial.

## Novidades da v0.1.0

- Novo menu **Usuários**;
- Cadastro de usuários;
- Edição de usuários;
- Ativação e inativação de usuários;
- Troca de senha pelo painel;
- Perfis de acesso por módulo;
- Menu lateral respeitando o perfil do usuário logado;
- Bloqueio visual de módulos sem permissão;
- Nome e perfil do usuário logado exibidos corretamente no rodapé;
- Proxy da Vercel sanitizando respostas de usuários, sem expor `senha_hash`, `token` e `token_expira_em` em listagens;
- Proxy exigindo token nas rotas internas, exceto `ping` e `login`.

## Arquivos para substituir no GitHub

Mantenha a estrutura:

```txt
erp-evento/
├── api/
│   └── erp.js
├── index.html
├── package.json
└── README.md
```

Substitua:

```txt
index.html
api/erp.js
package.json
README.md
```

## Variáveis recomendadas na Vercel

Em `Project Settings > Environment Variables`:

```txt
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzdCI-7c_60QLAd4oRvPli65t4ITKx82l51M6hMEi0y-saGrNEYR0Se4ZHO3bHMkrh33g/exec
ENFORCE_PROXY_TOKEN=true
```

`ENFORCE_PROXY_TOKEN=true` é recomendado. A versão já usa `true` como padrão no proxy, mas deixar explícito ajuda na manutenção.

## Ajuste recomendado no Apps Script

No `Code.gs`, quando você quiser ativar a validação diretamente no Apps Script, altere:

```js
EXIGIR_TOKEN: false
```

para:

```js
EXIGIR_TOKEN: true
```

Depois faça novo deploy do Apps Script:

```txt
Deploy > Manage deployments > Edit > Version: New version > Deploy
```

Antes disso, teste a versão no front-end para garantir que login, dashboard e menus estão funcionando.

## Teste recomendado

1. Fazer login com `admin@gpv.com` / `123456`;
2. Abrir **Usuários**;
3. Criar um usuário teste com perfil `Consultor`;
4. Sair;
5. Entrar com o usuário teste;
6. Confirmar que apenas os módulos liberados aparecem;
7. Entrar novamente como Super Admin;
8. Inativar o usuário teste;
9. Tentar login com ele e confirmar bloqueio.

## Observação importante

Não execute novamente `setupBancoERP` depois que houver dados na planilha. Essa função recria a estrutura inicial e pode limpar registros.
