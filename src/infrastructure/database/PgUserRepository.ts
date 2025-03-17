import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";

const prisma = new PrismaClient();

export class PgUserRepository implements IUserRepository {
    async createUser(user: User): Promise<User> {
        return await prisma.user.create({ data: user });
    }

    async getUserById(id: string): Promise<User | null> {
        return await prisma.user.findUnique({ where: { id } });
    }

    async updateUser(user: User): Promise<User> {
        return await prisma.user.update({ where: { id: user.id }, data: user });
    }

    async deleteUser(id: string): Promise<void> {
        await prisma.user.delete({ where: { id } });
    }
}
