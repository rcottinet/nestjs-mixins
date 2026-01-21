# NestJS Mixins Example

A simple example project demonstrating how to use **TypeScript mixins** with NestJS for entities and services.

Here I'm using `typeorm` with `sqlite`

## What is this?

This project shows a practical implementation of mixins in NestJS to:

- Add reusable properties to **entities** (timestamps like `createdAt`, `updatedAt`, `deletedAt`)
- Add reusable methods to **services** (CRUD operations)

## How Mixins Work

```mermaid
graph LR
    A[BaseEntity] --> D[compose]
    B[WithCreatedAt] --> D
    C[WithUpdatedAt] --> D
    E[WithDeletedAt] --> D
    D --> F[User Entity]

    F -.-> G[id: number]
    F -.-> H[createdAt: Date]
    F -.-> I[updatedAt: Date]
    F -.-> J[deletedAt: Date]

    style D fill:#4CAF50,stroke:#333,stroke-width:2px,color:#fff
    style F fill:#2196F3,stroke:#333,stroke-width:2px,color:#fff
```

The `compose` function takes a base class and multiple mixins, then combines them into a single class with all properties and methods.

## ⚠️ Important Note

**TypeScript and NestJS don't have native mixin support.** What we call "mixins" here is really just **successive class extensions** behind the scenes.

The `compose` function essentially does this:

```typescript
// This:
compose(BaseEntity, WithCreatedAt, WithUpdatedAt, WithDeletedAt);

// Is equivalent to:
class Temp1 extends BaseEntity {}
class Temp2 extends WithCreatedAt(Temp1) {}
class Temp3 extends WithUpdatedAt(Temp2) {}
class Final extends WithDeletedAt(Temp3) {}
```

Each mixin function returns a new class that extends the previous one, creating a chain of inheritance. This has limitations:

- **Dependency Injection issues**: NestJS decorators like `@InjectRepository()` don't work inside mixins
- **Constructor limitations**: You can't easily inject dependencies through mixin constructors
- **Not true composition**: It's inheritance, not composition, so you face traditional inheritance limitations

This is why you'll see workarounds in the code, like using a base class for DI in services.

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
