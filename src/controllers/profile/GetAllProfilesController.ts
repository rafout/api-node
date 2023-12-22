import { Request, Response } from "express";	
import { GetAllProfileService } from "../../services/profiles/GetAllProfileService";

export class GetAllProfilesController {
    async handle(request: Request, response: Response) {
        const profileService = new GetAllProfileService();

        const profiles = await profileService.execute();

        if(profiles instanceof Error) return response.status(400).json({ error: profiles.message });

        return response.status(200).json(profiles);
    }
}
