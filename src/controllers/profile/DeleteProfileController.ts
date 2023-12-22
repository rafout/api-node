import { Request, Response } from "express";
import { DeleteProfileService } from "../../services/profiles/DeleteProfileService";

export class DeleteProfileController {
    async handle(request: Request, response: Response) {
        const id = Number(request.params.id);

        const profileSerive = new DeleteProfileService();

        const profile = await profileSerive.execute(id);

        if(profile instanceof Error) return response.status(400).json({ error: profile.message });

        return response.status(200).json(profile);
    }
}
