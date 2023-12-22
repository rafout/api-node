import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
import { UserRequest } from "../../types/user/UserRequest.type";

export class CreateUserController {
    async handle(request: Request, response: Response){
        const user: UserRequest = request.body;

        const createUserService = new CreateUserService();

        const result = await createUserService.execute(user);

        if(result instanceof Error) return response.status(400).json({ error: result.message });

        return response.status(201).json(result);
    }
}