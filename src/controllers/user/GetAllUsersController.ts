import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/users/GetAllUsersService";

export class GetAllUsersController {
    async handle(request: Request, response: Response) {
        const getAllUsersService = new GetAllUsersService();

        const result = await getAllUsersService.execute();

        if (result instanceof Error) return response.status(400).json({ error: result.message });

        return response.status(200).json(result);
    }
}