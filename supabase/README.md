# Supabase boundary

Supabase is reserved for leads, users, permissions, and backoffice data. WordPress
owns articles and resources. Phase 1 does not create production tables or expose a
dashboard.

When schema work begins:

- create migrations with the Supabase CLI;
- enable RLS on every table in an exposed schema;
- test allow and deny behavior for every role;
- use publishable keys in browser code and secret keys only in trusted server code;
- store authorization claims in app metadata or protected database tables, never
  in user-editable metadata.
