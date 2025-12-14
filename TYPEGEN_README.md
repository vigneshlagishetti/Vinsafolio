#TypeGen Guide

##Command

```bash

pnpm typegen

```

##What It Does

Generates TypeScript type definitions from your Sanity schema and synchronizes them with your codebase.

##When to Use

###1. **After Schema Changes**

When you modify, add, or remove document types in your Sanity schema:

```bash

pnpm typegen

```

This ensures your TypeScript types match the updated schema structure.

###2. **After Data Structure Changes**

When you change field names, types, or structure in Sanity documents:

```bash

pnpm typegen

```

This regenerates types to reflect the new data structure.

###3. **Before Deploying**

Always run typegen before deploying to ensure type safety:

```bash

pnpm typegen

```

##Use Cases

###Use Case 1: Adding a New Document Type

1. Create new schema in `sanity/schemaTypes/`
2. Run `pnpm typegen`
3. New types are available in `sanity.types.ts`
4. Import and use in components with full type safety

###Use Case 2: Modifying Existing Fields

1. Update field definitions in your Sanity schema
2. Run `pnpm typegen`
3. TypeScript will catch any mismatches in your queries
4. Update your code to match new types

###Use Case 3: Changing Query Patterns

1. Update GROQ queries in your components
2. Run `pnpm typegen`
3. Get accurate return types for your queries
4. TypeScript provides autocomplete for query results

##Output

- Generates: `sanity.types.ts`
- Contains all document types and interfaces
- Safe to import and use throughout your codebase
