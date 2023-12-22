import { Request, Response } from "express";
import { UpdateUserService } from "../../services/users/UpdateUserService";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const id = Number(request.params.id);

        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute(id, request.body);

        if(result instanceof Error) return response.json({ error: result.message });

        return response.json({ result });
    }
}