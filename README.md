# clean-architecture-node

Clean Architecture in a Node.js project, for a User Management API using Express, TypeScript, and Dependency Injection, adhering to SOLID principles and ensuring Separation of Concerns.

## Project Structure

```
📂 clean-architecture-node
│── 📂 src
│   ├── 📂 application  # Business rules (Use Cases)
│   │   ├── 📂 use-cases
│   │   │   ├── CreateUser.ts
│   │   │   ├── GetUser.ts
│   │   │   ├── UpdateUser.ts
│   │   │   ├── DeleteUser.ts
│   ├── 📂 domain  # Core business logic (Entities)
│   │   ├── User.ts
│   │   ├── IUserRepository.ts
│   ├── 📂 infrastructure  # External dependencies (DB, Express, etc.)
│   │   ├── 📂 database
│   │   │   ├── UserRepository.ts
│   │   ├── 📂 controllers
│   │   │   ├── UserController.ts
│   │   ├── 📂 routes
│   │   │   ├── userRoutes.ts
│   ├── 📂 config  # Dependency Injection
│   │   ├── container.ts
│   ├── 📂 server.ts
│── package.json
│── tsconfig.json
│── .env
│── .gitignore
```

* Domain Layer → Defines business logic (Entities & Interfaces).
* Application Layer → Implements Use Cases (Business Rules).
* Infrastructure Layer → Handles frameworks, DB, and APIs.
* Controllers & Routes → Exposes API endpoints.
* Dependency Injection (DI) → Ensures modular & testable code.

## Dependencies

- `express`: Web framework
- `dotenv`: Environment variables
- `reflect-metadata` & `tsyringe`: Dependency Injection
- `ts-node` & `nodemon`: Dev environment
- `uuid`: Generate unique identifiers

## Running the Application

```sh
npx ts-node src/server.ts
```

## Test (create a user)

```sh
curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}'
```

## Next Steps

1. **Connect to a real database** (MongoDB, PostgreSQL).
2. **Add More Use Cases** (`GetUser`, `UpdateUser`, `DeleteUser`).
3. **Implement Authentication** (JWT).
4. **Write Unit Tests** with Jest & Mocking.
