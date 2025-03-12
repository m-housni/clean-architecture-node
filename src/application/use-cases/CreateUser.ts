import { injectable } from "tsyringe";
import { IUserRepository } from "../../domain/IUserRepository";
import { User } from "../../domain/User";
import { v4 as uuidv4 } from "uuid";

@injectable()
export class CreateUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(name: string, email: string): Promise<User> {
        const newUser = new User(uuidv4(), name, email);
        return this.userRepository.createUser(newUser);
    }
}
