# CLAUDE.md - Project Instructions

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal blog system** (Blog Frontend) built with Next.js 16.1.1, consisting of two separate applications:

- **Admin Application**: For creating and managing blog posts
- **Client Application**: For displaying published blog posts to readers
- **API Server**: Separate backend (NestJS, not in this repository)

Current state: Next.js starter template. The actual blog implementation needs to be built following the detailed specification in README.md.

---

## Technology Stack

### Frontend (This Repository)

- **Framework**: Next.js 16.1.1 with App Router (React 19, TypeScript 5.9.3)
- **Package Manager**: pnpm (required)
- **Node Version**: v24 (see .nvmrc)
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Content Editor**: Tiptap v2 (headless editor)
- **State Management**: Zustand
- **Authentication**: Auth.js v5 (NextAuth v5) with JWT
- **HTTP Client**: fetch built-in
- **Image**: next/image

### Backend (Separate Repository)

- **Framework**: NestJS 10+ with TypeScript
- **Database**: PostgreSQL 16+ with Prisma 5+
- **Authentication**: JWT with @nestjs/jwt, @nestjs/passport
- **Validation**: class-validator, class-transformer

---

## Development Commands

```bash
# Core Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm build:analyze    # Build with bundle analysis

# Code Quality
pnpm type-check       # Run TypeScript type checking (includes next typegen)
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues automatically
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Git Workflow
# Pre-commit hooks automatically run lint-staged (ESLint + Prettier)
# Commit validation enforced via commitlint (Conventional Commits)
# Use SKIP_ENV_VALIDATION=1 to skip env validation during builds
```

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with font loading
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with dark mode support
├── components/          # React components (to be added)
│   ├── admin/          # Admin-specific components
│   ├── client/         # Client-specific components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions
│   └── env/            # Environment variable management
│       ├── client.ts   # Client-side env vars (NEXT_PUBLIC_*)
│       └── server.ts   # Server-side env vars
├── hooks/              # Custom React hooks (to be added)
├── stores/             # Zustand stores (to be added)
└── types/              # TypeScript types (to be added)
```

### Path Aliases (tsconfig.json)

- `@/*` → `./src/*`
- `@/public/*` → `./public/*`

---

## Key Architectural Decisions

### 1. Separation of Concerns (Critical Rule)

**Admin and Client are COMPLETELY SEPARATE applications:**

- Different UI components
- Different logic
- No shared code between them
- Admin writes to API only
- Client reads from API only

**API Server (NestJS - separate repo):**

- Only API handles database operations
- Admin → API → Database
- Client → API → Database
- API does NOT render UI or handle layouts

**Database:**

- Only stores data
- No business logic
- No display logic

### 2. Content Architecture (Block-Based)

Blog content is stored as **flat blocks in JSONB format** (NOT HTML):

```json
[
  { "type": "heading", "data": { "text": "Title" } },
  { "type": "text", "data": { "content": "Content..." } },
  { "type": "image", "data": { "url": "/img.png", "caption": "Caption" } },
  { "type": "code", "data": { "lang": "ts", "code": "const a = 1" } },
  { "type": "markdown", "data": { "content": "## MD" } }
]
```

**Why blocks instead of HTML?**

- UI-agnostic content storage
- Easy to change editors without migrating data
- Better security (no XSS from HTML)
- Easier to version control
- Can render to different formats (web, mobile, API)

### 3. Environment Variable Management

Uses `@t3-oss/env-nextjs` for type-safe environment variables:

- Define schemas in `src/lib/env/client.ts` and `src/lib/env/server.ts`
- Both files imported in `next.config.ts` for build-time validation
- Empty strings treated as undefined (`emptyStringAsUndefined: true`)
- Use `SKIP_ENV_VALIDATION=1` to bypass during builds

### 4. Database Schema (7 Tables)

**Core Tables:**

1. **users**: id, email (unique), password, name, role (admin|editor), created_at, updated_at
2. **posts**: id, title, slug (unique), excerpt, thumbnail_url, status (draft|published|archived), blocks (jsonb), user_id (fk), published_at, created_at, updated_at
3. **post_versions**: id, post_id (fk), blocks (jsonb), user_id (fk) - for version control
4. **categories**: id, name, slug (unique), created_at, updated_at
5. **post_categories**: post_id (fk), category_id (fk) - many-to-many
6. **tags**: id, name, slug (unique), created_at, updated_at
7. **post_tags**: post_id (fk), tag_id (fk) - many-to-many

### 5. Security Configuration

Comprehensive security headers in `next.config.ts`:

- Content Security Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-XSS-Protection
- X-Content-Type-Options
- Permissions-Policy (disables accelerometer, camera, gyroscope, microphone, USB)

### 6. Performance Optimizations

- **React Compiler**: Enabled (`reactCompiler: true`)
- **Turbopack FileSystem Cache**: Enabled for builds
- **Strict Mode**: Enabled (`reactStrictMode: true`)

---

## Critical Rules (from README.md)

1. **Admin MUST NOT write directly to Database** (use API)
2. **Client MUST NOT write data** (read-only)
3. **DO NOT store content as HTML** (use block-based JSONB)
4. **API MUST NOT render UI**
5. **DO NOT mix admin logic with client display logic**
6. **TypeScript is REQUIRED for all code**
7. **Validate data on BOTH Frontend and Backend**

---

## Code Quality Standards

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured for clean imports
- ESNext module resolution

### Linting & Formatting

- **ESLint**: Flat config with React, Next.js, TypeScript, Prettier plugins
- **Prettier**: 120 char line width, single quotes, trailing commas, 2-space indentation
- **Import Rules**: eslint-plugin-import-x for import organization

### Pre-commit Hooks

- lint-staged runs ESLint + Prettier on staged files
- commitlint enforces Conventional Commits format

### CI/CD

GitHub Actions runs on PRs:

- Type checking
- Linting
- Format checking

---

## Implementation Guidelines

### 1. File Naming Conventions

- **Components**: PascalCase (e.g., `PostCard.tsx`, `CreatePostForm.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `usePostForm.ts`, `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Types**: PascalCase (e.g., `Post.ts`, `User.ts`)

### 2. Component Structure

```tsx
// Component file: PostCard.tsx
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  // Component logic
}
```

### 3. API Calls

Use the built-in `fetch` API with proper error handling:

```typescript
// lib/api/posts.ts
export async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
```

### 4. Form Handling

Use React Hook Form + Zod:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  // ... other fields
});
```

### 5. State Management

Use Zustand for complex state:

```typescript
// stores/authStore.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

---

## Required Pages (from README)

### Admin Pages

1. **Login page** (email/password)
2. **Post list** (with status: draft/published)
3. **Create new post**
4. **Edit existing post**
5. **Preview post** (admin-only, no public URL)

### Client Pages

1. **Post list** (public posts only)
2. **Post detail** (with fixed URL/slug)

---

## Design Principles

1. **Keep it simple** - Don't over-engineer
2. **TypeScript first** - All code must be typed
3. **Component composition** - Build small, reusable components
4. **Server components where possible** - Use Next.js App Router features
5. **Accessibility** - Follow WCAG guidelines
6. **Performance** - Optimize images, use lazy loading, avoid unnecessary re-renders
7. **SEO** - Use Next.js Metadata API for Client pages

---

## Testing

Currently no test framework is configured. When adding tests:

- Consider Vitest for unit tests
- Consider React Testing Library for component tests
- Consider Playwright for E2E tests

---

## Common Pitfalls to Avoid

1. **DON'T** mix Admin and Client components
2. **DON'T** store content as HTML
3. **DON'T** bypass the API layer
4. **DON'T** use `any` type - use proper TypeScript types
5. **DON'T** hardcode values - use environment variables
6. **DON'T** skip validation - validate on both frontend and backend
7. **DON'T** ignore TypeScript errors
8. **DON'T** forget to handle loading and error states

---

## When to Ask for Clarification

Ask before:

- Changing the overall architecture
- Adding new libraries (especially for state management, forms, routing)
- Making database schema changes
- Implementing features not in README.md
- Changing authentication approach
- Modifying environment variable structure
- Making breaking changes to existing code

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tiptap Editor](https://tiptap.dev/docs)
- [Zustand](https://zustand-demo.pmnd.rs)
