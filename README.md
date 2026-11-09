# Portfólio — Ronielli

Portfólio pessoal em Next.js (App Router) + React + TypeScript, com i18n (PT/EN) e tema escuro ciano/esmeralda.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Abre em http://localhost:3000.

## Build

```bash
pnpm build
pnpm start
```

## Deploy

Deploy na Vercel via GitHub Actions (`.github/workflows/deploy.yml`): cada push na `main` faz build no GitHub e publica na Vercel por token, sem a Vercel acessar o repositório.
