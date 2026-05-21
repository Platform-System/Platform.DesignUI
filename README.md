# Platform Design System

GitHub repository: `DesignSystemUI`

Local workspace folder: `Platform.DesignSystem`

Published package/import path: `@platform/design-system`

Shared UI foundation for the Platform frontend apps.

## Scope

This package is the source of truth for:

- design tokens and shared CSS
- theme provider and theme hooks
- generic primitives and reusable UI building blocks
- shared utility hooks tied to the design system

This package should **not** own:

- marketplace-specific flows
- admin-only business panels
- portal-only editorial sections
- app routing, data fetching, or feature logic

## Current Consumers

- `Platform.MerchantUI`
- `Platform.AdminUI`
- `Platform.PortalUI`

## Commands

Run from repo root:

```bash
npm run lint:design-system
npm run typecheck:design-system
npm run build:design-system
npm run verify:shared-ui
```

Or from this package:

```bash
npm run lint
npm run typecheck
npm run build
```

## Import Rules

For generic UI, consumers should import directly from:

```ts
import { Button, Input, ThemeProvider } from "@platform/design-system"
```

Or, when needed, from explicit subpaths:

```ts
import { cn } from "@platform/design-system/lib/cn"
import { useToast } from "@platform/design-system/hooks/use-toast"
```

Avoid reintroducing app-local wrapper files unless they add real app-specific behavior or styling.

## Shared vs Local

Put a component here when:

- it is reusable across multiple apps
- it has no business-specific assumptions
- it does not need heavy `if platform === ...` branching

Keep a component in the app when:

- it is tied to a specific product flow
- it encodes app-specific layout or content behavior
- it exists mainly to express a brand surface unique to one app

## Folder Guide

- `src/components`: shared primitives and reusable UI blocks
- `src/hooks`: shared hooks used by the design system
- `src/lib`: small shared utilities
- `src/*.css`: tokens, base styles, scrollbar, global shared CSS

## Expected Workflow

1. Build generic UI here first.
2. Consume it directly from apps.
3. Keep app wrappers thin, temporary, or intentionally app-specific.
4. Delete dead compatibility wrappers once consumers move over.
