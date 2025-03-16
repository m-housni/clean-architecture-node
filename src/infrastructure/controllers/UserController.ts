import { Request, Response } from "express";
import { container } from "../../config/container";
import { CreateUser } from "../../application/use-cases/CreateUser";
import { GetUser } from "../../application/use-cases/GetUser";
import { UpdateUser } from "../../application/use-cases/UpdateUser";
import { DeleteUser } from "../../application/use-cases/DeleteUser";
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

    static async updateUser(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { name, email } = req.body;
        const updateUser = container.resolve(UpdateUser);
        const user = await updateUser.execute(id, new User(id, name, email));
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    }

    static async deleteUser(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const deleteUser = container.resolve(DeleteUser);
        await deleteUser.execute(id);
        return res.status(204).send();
    }
}
