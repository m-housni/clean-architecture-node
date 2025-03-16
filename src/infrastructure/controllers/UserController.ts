import { Request, Response } from "express";
import { container } from "../../config/container";
import { CreateUser } from "../../application/use-cases/CreateUser";
import { GetUser } from "../../application/use-cases/GetUser";
import { User } from "../../domain/User";

export class UserController {
    // TODO: handle the any type for the response
    static async createUser(req: Request, res: Response): Promise<any> {
        const { name, email } = req.body;
        const createUser = container.resolve(CreateUser);
        const user = await createUser.execute(name, email);
        return res.status(201).json(user);
    }

    static async getUserById(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const getUser = container.resolve(GetUser);
        const user = await getUser.execute(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }
}
