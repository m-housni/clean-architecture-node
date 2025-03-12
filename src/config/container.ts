import "reflect-metadata";
import { container } from "tsyringe"; // ts
import { IUserRepository } from "../domain/IUserRepository";
import { UserRepository } from "../infrastructure/database/UserRepository";

container.register<IUserRepository>("IUserRepository", { useClass: UserRepository });

export { container };
