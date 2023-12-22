import { CreateProfileService } from "../../services/profiles/CreateProfileService";
import { Request, Response } from "express";

export class CreateProfileController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body; 

        const createProfileService = new CreateProfileService();

        const result = await createProfileService.execute({ name });

        if(result instanceof Error) return response.status(400).json({ error: result.message });
        
        return response.status(201).json(result);
    }
}
