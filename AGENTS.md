# Repository Guidelines

## Project Structure & Module Organization

This repository is a React + TypeScript pizza-delivery frontend using TanStack Start. Application code lives in `src/`:

- `src/app/` contains router and Query initialization, file-based routes, and Mantine theme setup.
- `src/app/routes/` contains route modules. Put page-only components in the neighboring `-components/` directory; keep reusable UI in `src/shared/`.
- `src/api/` contains the Axios client and endpoint modules grouped by resource and operation, such as `users/get-user/`.
- `src/store/`, `src/utils/`, and `src/assets/` contain client state, shared helpers, and static assets.

TanStack generates `src/app/routeTree.gen.ts`; do not edit it by hand. There is no test directory or test framework configured yet.

## Build, Test, and Development Commands

- `npm install` installs dependencies; commit `package-lock.json` changes with dependency updates.
- `npm run dev` starts the local Vite/TanStack Start server at `http://localhost:3000`.
- `npm run build` creates the production client and server bundles.
- `npm run start` serves the production output.
- `npm run typecheck` runs TypeScript without emitting files.

No test or lint script is currently configured. Run the type check and production build when validating code changes.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing two-space indentation and single-quoted imports. Use `PascalCase` for React components and types, `camelCase` for functions and values, and kebab-case for filenames (for example, `get-user-query-options.ts`). Keep route-only components beside their route under `-components/`. Put API request logic and its Query options together in the endpoint folder. Create QueryClient instances per router for SSR isolation. Keep theme tokens and global Mantine styles in `src/app/theme/`.

## Testing Guidelines

There is currently no test framework or coverage requirement. Do not add tests to an unrelated change. If tests are introduced, document the runner and command in `package.json` and keep test files near the modules they cover or in a clearly named `tests/` directory.

## Commit & Pull Request Guidelines

The repository has no commit history yet, so no established commit convention can be inferred. Use concise imperative subjects, optionally prefixed by scope (for example, `feat(cart): add quantity controls`). PRs should describe the user-facing change, list relevant validation commands, and include screenshots for visible UI changes. Link related issues when applicable.

## Configuration & Secrets

Set `VITE_API_URL` in a local `.env` file; `.env.example` documents the default. Never commit real credentials or environment-specific secrets.
