import { Request, Response } from "express";
import { container } from "../../config/container";
import { CreateUser } from "../../application/use-cases/CreateUser";
import { User } from "../../domain/User";

export class UserController {
    // TODO: handle the any type for the response
    static async createUser(req: Request, res: Response): Promise<any> {
        const { name, email } = req.body;
        const createUser = container.resolve(CreateUser);
        const user = await createUser.execute(name, email);
        return res.status(201).json(user);
    }
}
