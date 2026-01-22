# NestJS Mixins Example

A simple example project to explore and demonstrate how to use **TypeScript mixins** with NestJS (at least for for entities).

> Inspired by AdonisJS `compose` helper : https://docs.adonisjs.com/guides/references/helpers#compose

## What is this?

This project shows a practical implementation of mixins in NestJS

## ⚠️ Important Note

**TypeScript supports mixins** through a pattern that uses successive class extensions. Behind the scenes, the `compose` function creates a chain of classes that extend each other:

```typescript
// Instead of group like:
class Common extends BaseEntity {
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt: Date;
}

class User extends Common {}

❌ not flexible, all or nothing

// OR instead of a chain like:
class User extends WithDeletedAt(
  WithUpdatedAt(
    WithCreatedAt(BaseEntity)
  )
) {}

❌ verbose and hard to read

// I'm trying to do this:
export class User extends compose(
  BaseEntity,
  WithCreatedAt,
  WithUpdatedAt,
  WithDeletedAt,
) {}

✅ flexible and readable
```

**This pattern has limitations with NestJS:**

- Dependency injection decorators (`@InjectRepository()`, etc.) don't work inside mixin classes

## Getting Started with pnpm

Install dependencies:

```bash
pnpm install
```

Run in development mode:

```bash
pnpm run start:dev
```

The API will be available at `http://localhost:3000`

For demo I'm using `typeorm` with `sqlite`
