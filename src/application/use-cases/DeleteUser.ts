import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";

@injectable()
export class DeleteUser {
    constructor(@inject("IUserRepository") private userRepository: IUserRepository) {}

    async execute(id: string): Promise<void> {
        return this.userRepository.deleteUser(id);
    }
}