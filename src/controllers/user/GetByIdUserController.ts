import { Request, Response } from "express";
import { GetByIdUserService } from "../../services/users/GetByIdUserService";

export class GetByIdUserController {
    async handle(request: Request, response: Response) {
        const id = Number(request.params.id);

        const getByIdUserService = new GetByIdUserService();

        const result = await getByIdUserService.execute(id);

        if(result instanceof Error) return response.status(400).json({ error: result.message });

        return response.json(result);
    }
}