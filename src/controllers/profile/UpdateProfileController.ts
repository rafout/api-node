import { Request, Response } from "express";
import { UpdateProfileService } from "../../services/profiles/UpdateProfileService";
import { ProfileRequest } from "../../types/profile/ProfileRequest.type";

export class UpdateProfileController {
    async handle(request: Request, response: Response){
        const id = Number(request.params.id);
        const { name }: ProfileRequest = request.body;

        const updateProfileService = new UpdateProfileService();

        const result = await updateProfileService.execute(id, { name });

        if(result instanceof Error) return response.status(400).json({ error: result.message });

        return response.status(200).json(result);
    }
}
