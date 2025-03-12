import { Request, Response } from "express";
import { container } from "../../config/container";
import { CreateUser } from "../../application/use-cases/CreateUser";

export class UserController {
    static async createUser(req: Request, res: Response) {
        const { name, email } = req.body;
        const createUser = container.resolve(CreateUser);
        const user = await createUser.execute(name, email);
        return res.status(201).json(user);
    }
}
