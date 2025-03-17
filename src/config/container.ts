import "reflect-metadata";
import { container } from "tsyringe"; // ts
import { IUserRepository } from "../domain/IUserRepository";
import { MgUserRepository } from "../infrastructure/database/MgUserRepository";
import { PgUserRepository } from "../infrastructure/database/PgUserRepository";

container.register<IUserRepository>("IUserRepository", { useClass: PgUserRepository });

export { container };
