import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";

export class UserRepository implements IUserRepository {
    // TODO: Replace with a real database
    private users: User[] = [];

    async createUser(user: User): Promise<User> {
        this.users.push(user);
        console.log(this.users);
        return user;
    }

    async getUserById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }

    async updateUser(user: User): Promise<User> {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
        return user;
    }

    async deleteUser(id: string): Promise<void> {
        this.users = this.users.filter(user => user.id !== id);
    }
}
