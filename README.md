# clean-architecture-node

In this guide, we'll walk through setting up Clean Architecture in a Node.js project. We'll create a User Management API using Express, TypeScript, and Dependency Injection, adhering to SOLID principles and ensuring Separation of Concerns.

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

## Dependencies

- `express`: Web framework  
- `dotenv`: Environment variables  
- `reflect-metadata` & `tsyringe`: Dependency Injection  
- `ts-node` & `nodemon`: Dev environment  




