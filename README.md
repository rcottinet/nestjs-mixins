# NestJS Mixins Example

A simple example project demonstrating how to use **TypeScript mixins** with NestJS for entities and services.

Here I'm using `typeorm` with `sqlite`

## What is this?

This project shows a practical implementation of mixins in NestJS to:

- Add reusable properties to **entities** (timestamps like `createdAt`, `updatedAt`, `deletedAt`)
- Add reusable methods to **services** (CRUD operations)

## Example Usage

**Entity with timestamp mixins:**

```typescript
@Entity()
export class User extends compose(
  BaseEntity,
  WithCreatedAt,
  WithUpdatedAt,
  WithDeletedAt,
) {
  @PrimaryColumn()
  id: number;
}
```

**Service with CRUD mixin:**

```typescript
@Injectable()
export class UserService extends compose(
  UserServiceBase,
  WithCrud<User, number>('id'),
) {}
```

This gives you `create()`, `read()`, `update()`, and `delete()` methods automatically.

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
