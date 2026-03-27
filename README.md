# Technical Management Platform (TypeScript)

In-memory modeling of an internal platform for software project technical management.

## Goal

Represent and process these entities in TypeScript:

- Developer
- Repository
- Pull Request
- Issue
- Project

All logic runs in the console, without backend or database.

## Architecture

This project uses a modular structure by responsibility (separation of concerns):

- `src/domain`: domain types
- `src/data`: sample data (seed)
- `src/reports`: reporting logic
- `src/utils`: shared utilities
- `src/index.ts`: entry point (orchestration)

## Structure

```txt
src/
  index.ts
  domain/
    types.ts
  data/
    seed.ts
  reports/
    team.report.ts
    prs.report.ts
    issues.report.ts
    alerts.report.ts
  utils/
    format.ts
```

## Implemented reports

1. Team
- Name
- Role
- Seniority
- Number of technologies

2. Pull Requests
- Title
- Status
- Author
- Number of reviewers
- Visual highlight for approved/merged PRs

3. Issues
- Count of issues by status
- Count of bugs vs improvements

4. Alerts
- Open pull requests with too many lines
- Critical unassigned issues
- Developers with too many assignments

## Requirements

- Bun installed
- TypeScript available in the project

## Installation

```bash
npm install
```

## Run in real time (Bun)

```bash
bun --watch src/index.ts
```

## Type-check in parallel (optional)

```bash
bunx tsc --noEmit --watch
```

## Build

```bash
npm run build
```

## Project status

The project compiles without errors using `tsc` and meets the challenge requirements.
