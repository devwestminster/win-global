# WIN Global

Independent website for WIN Education. This repository does not share source code,
assets, infrastructure, credentials, databases, or deployment configuration with
any other website.

## Stack

- Next.js App Router, React, and TypeScript
- CSS Modules and project-owned design tokens
- WordPress/WPGraphQL adapter for future articles and resources
- Supabase adapters for future leads, users, permissions, and backoffice
- Vercel deployment in Singapore (`sin1`)

## Local development

1. Copy `.env.example` to `.env.local` and fill only the services you want to test.
2. Run `npm install`.
3. Run `npm run dev`.

The public homepage works without WordPress or Supabase credentials.
