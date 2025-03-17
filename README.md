### **Simple NodeJS User Management API using Clean Architecture**

This project demonstrates the application of **Clean Architecture** in a **Node.js** API designed for user management. Using **Express**, **TypeScript**, and **Dependency Injection**, the API ensures maintainable and scalable code by adhering to the **SOLID principles** and emphasizing **Separation of Concerns**.

---

### **Features**
- **Database Flexibility**: Easily switch between MongoDB and PostgreSQL.
- **CRUD Operations**: Implement use cases for **Create**, **Read**, **Update**, and **Delete** users.
- **Authentication**: Secure endpoints with **JWT authentication**.
- **Unit Testing**: Comprehensive unit tests using **Jest** and **Mocking** for mock dependencies.

---

### **Project Structure**
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

---

### **Architecture Layers**
- **Domain Layer**: Contains the core business logic, defining entities and interfaces such as `User` and `IUserRepository`.
- **Application Layer**: Implements use cases like `CreateUser`, `GetUser`, `UpdateUser`, and `DeleteUser`.
- **Infrastructure Layer**: Handles external dependencies like databases (MongoDB/PostgreSQL), Express, and APIs.
- **Controllers & Routes**: Exposes API endpoints for managing users.
- **Dependency Injection (DI)**: Ensures modular, testable, and flexible code structure.

---

### **Dependencies**
- `express`: Web framework
- `dotenv`: Environment variable management
- `reflect-metadata` & `tsyringe`: Dependency Injection
- `ts-node` & `nodemon`: Development tools
- `uuid`: Generate unique identifiers

---

### **Running the Application**
To start the application, run the following:
```sh
npx ts-node src/server.ts
```

### **Test (Create a User)**:
Use the following `curl` command to test the user creation endpoint:
```sh
curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}'
```

---

This project provides a clean and modular architecture, promoting separation of concerns, testability, and scalability. It serves as a solid foundation for building complex, maintainable applications.