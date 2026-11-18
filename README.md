# Pizza frontend

Frontend for a pizza delivery service, built with React, TypeScript and TanStack Start.

## Project structure

- `src/app/` — TanStack Start initialization, router, Query client, routes, and Mantine theme
- `src/api/` — Axios client and endpoint modules, grouped by resource and operation
- `src/assets/` — static assets
- `src/shared/` — reusable UI and application components
- `src/store/` — client state managed with Zustand
- `src/utils/` — shared utility functions
- `src/app/routes/-components/` — components used only by the adjacent route

An API operation keeps its request and Query options together, for example
`src/api/users/get-user/`.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run typecheck` — check TypeScript types

Set `VITE_API_URL` in `.env` to point Axios at the backend API. The default is `/api`.
