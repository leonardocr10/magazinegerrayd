# Magazine Gerrayd

Primeira entrega do projeto do **Magazine Gerrayd**, uma plataforma de ofertas e produtos afiliados com foco em curadoria, atualizacao automatica e painel administrativo.

## Arquitetura proposta

- `Next.js 16 + React 19 + TypeScript`: front-end publico, painel admin, rotas e server actions.
- `Tailwind CSS`: tokens visuais e componentes reutilizaveis.
- `PostgreSQL + Prisma`: modelagem de catalogo, cupons, cliques, favoritos, historico de precos e integracoes.
- `Redis`: reservado para cache, filas e jobs recorrentes.
- `JWT via cookies httpOnly`: autenticacao inicial do painel.
- `Providers desacoplados`: base para Amazon, Shopee, Mercado Livre e Magalu usando apenas APIs/documentacoes oficiais quando as credenciais existirem.

## Estrutura principal

```text
prisma/
  schema.prisma
  seed.ts
src/
  app/
    admin/
    achadinhos/
    buscar/
    go/[offerId]/route.ts
  components/
    admin/
    store/
    ui/
  lib/
    auth/
    data/
    marketplaces/
    services/
    validation/
docker-compose.yml
.env.example
proxy.ts
```

## Ordem de implementacao desta fase

1. Configuracao do app, envs, Docker e identidade visual.
2. Schema Prisma com entidades de catalogo, afiliacao e operacao.
3. Home publica, busca e pagina de achadinhos.
4. Painel administrativo inicial com autenticacao e protecao de rota.
5. Cadastro manual de produtos.
6. Interface de marketplaces e servico de sincronizacao com provider simulado.

## Como rodar

1. Copie `.env.example` para `.env`.
2. Suba a infraestrutura:

```bash
docker compose up -d
```

3. Gere o client do Prisma:

```bash
pnpm db:generate
```

4. Opcionalmente, empurre o schema e popule dados iniciais:

```bash
pnpm db:push
pnpm db:seed
```

5. Rode a aplicacao:

```bash
pnpm dev
```

## Credenciais iniciais

- E-mail: `admin@magazinegerrayd.com.br`
- Senha: `TroquePorUmaSenhaSegura123!`

Troque ambas no `.env` antes de usar em qualquer ambiente real.
