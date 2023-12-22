import { Request, Response } from "express";
import { GetByIdProfileService } from "../../services/profiles/GetByIdProfileService";

export class GetByIdProfileController {
    async handle(request: Request, response: Response) {
        const id = Number(request.params.id);
        
        const profileService = new GetByIdProfileService();

        const profiles = await profileService.execute(id);

        if(profiles instanceof Error) return response.status(400).json({ error: profiles.message });

        if(profiles.length === 0) return response.status(404).json({ error: 'No profile found' });

        return response.status(200).json(profiles);
    }
}
