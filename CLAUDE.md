# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal blog system** with two separate applications:
- **Admin Application**: For creating and managing blog posts
- **Client Application**: For displaying published blog posts to readers
- **API Server**: Separate backend (not in this repository - will be NestJS)

Current state: Next.js 16.1.1 starter template with TypeScript. The actual blog implementation needs to be built following the detailed specification in README.md (in Vietnamese).

## Development Commands

### Core Development
```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm build:analyze    # Build with bundle analysis
```

### Code Quality
```bash
pnpm type-check       # Run TypeScript type checking (includes next typegen)
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting
```

### Git Workflow
- **Pre-commit hooks**: Automatically run lint-staged (ESLint + Prettier on staged files)
- **Commit validation**: Conventional commits enforced via commitlint
- Use `SKIP_ENV_VALIDATION=1` to skip environment validation during builds (useful for Docker)

## Architecture

### Technology Stack
- **Framework**: Next.js 16.1.1 with App Router (React 19, TypeScript 5.9.3)
- **Package Manager**: pnpm (required)
- **Node Version**: v24 (see .nvmrc)
- **State Management**: Planned to use Zustand
- **Forms**: Planned to use React Hook Form + Zod
- **Content Editor**: Planned to use Tiptap v2
- **Styling**: Tailwind CSS + shadcn/ui (planned)

### Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with font loading
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with dark mode support
└── lib/
    └── env/             # Environment variable management
        ├── client.ts    # Client-side env vars (NEXT_PUBLIC_*)
        └── server.ts    # Server-side env vars
```

### Path Aliases (tsconfig.json)
- `@/*` → `./src/*`
- `@/public/*` → `./public/*`

## Key Architectural Decisions

### 1. Environment Variable Management
Uses `@t3-oss/env-nextjs` for type-safe environment variables:
- Define schemas in `src/lib/env/client.ts` and `src/lib/env/server.ts`
- Both files are imported in `next.config.ts` to validate at build time
- Empty strings are treated as undefined (emptyStringAsUndefined: true)
- Use `SKIP_ENV_VALIDATION=1` to bypass validation during builds

### 2. Content Architecture (Planned)
Blog content will be stored as **flat blocks** in JSONB format (not HTML):
```json
[
  { "type": "heading", "data": { "text": "Title" } },
  { "type": "text", "data": { "content": "Content..." } },
  { "type": "image", "data": { "url": "/img.png", "caption": "Caption" } },
  { "type": "code", "data": { "lang": "ts", "code": "const a = 1" } }
]
```

### 3. Separation of Concerns (Critical Rule)
- **Admin** and **Client** are completely separate applications with no shared UI/logic
- Neither Admin nor Client access the database directly
- All data access goes through the API server
- API does NOT render UI or handle layouts
- Database does NOT handle business logic or display logic

### 4. Security Configuration
The project has comprehensive security headers configured in `next.config.ts`:
- Content Security Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-XSS-Protection
- X-Content-Type-Options
- Permissions-Policy (disables accelerometer, camera, gyroscope, microphone, USB)

### 5. Performance Optimizations
- **React Compiler**: Enabled in `next.config.ts` (reactCompiler: true)
- **Turbopack FileSystem Cache**: Enabled for builds
- **Strict Mode**: Enabled (reactStrictMode: true)

## Code Quality Standards

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured for clean imports
- ESNext module resolution

### Linting & Formatting
- **ESLint**: Flat config format with React, Next.js, TypeScript, and Prettier plugins
- **Prettier**: 120 char line width, single quotes, trailing commas, 2-space indentation
- **Import Rules**: Uses eslint-plugin-import-x for import organization

### Testing
Currently no test framework is configured. When adding tests:
- Consider Vitest for unit tests
- Consider React Testing Library for component tests
- Consider Playwright for E2E tests

## Planned Database Schema (PostgreSQL + Prisma)

The blog system will use these tables (detailed in README.md):

### Core Tables
1. **users**: Admin/editor accounts with roles
2. **posts**: Core table with title, slug, status (draft|published|archived), blocks (JSONB)
3. **categories** + **post_categories**: Many-to-many categorization
4. **tags** + **post_tags**: Many-to-many tagging

### Optional Tables
5. **post_versions**: Version control for undo/redo and history
6. **media**: File upload management

## Critical Rules (from README.md)

1. Admin MUST NOT write directly to Database (use API)
2. Client MUST NOT write data (read-only)
3. DO NOT store content as HTML (use block-based JSONB)
4. API MUST NOT render UI
5. DO NOT mix admin logic with client display logic
6. TypeScript is REQUIRED for all code
7. Validate data on BOTH Frontend and Backend

## Implementation Notes

### Required Pages (from README specification)

**Admin Pages:**
- Login page (email/password)
- Post list (with status: draft/published)
- Create new post
- Edit existing post
- Preview post (admin-only, no public URL)

**Client Pages:**
- Post list (public posts only)
- Post detail (with fixed URL/slug)

### API Server (Separate Repository)
The API server will be built with:
- NestJS 10+
- PostgreSQL 16+
- Prisma 5+
- JWT authentication (@nestjs/jwt, @nestjs/passport)
- class-validator for validation
- @nestjs/swagger for API documentation (recommended)

## CI/CD

GitHub Actions workflow runs on pull requests:
- Type checking
- Linting
- Format checking

All checks must pass before merging.
