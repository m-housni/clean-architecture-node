import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";

@injectable()
export class UpdateUser {
    constructor(@inject("IUserRepository") private userRepository: IUserRepository) {}

    async execute(id: string, u: User): Promise<User | null> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            return null;
        }
        const updatedUser = new User(user.id, u.name, u.email);
        return this.userRepository.updateUser(updatedUser);
    }
}