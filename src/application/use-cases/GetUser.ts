import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";

@injectable()
export class GetUser {
    constructor(@inject("IUserRepository") private userRepository: IUserRepository) {}

    async execute(id: string): Promise<User | null> {
        return this.userRepository.getUserById(id);
    }
}