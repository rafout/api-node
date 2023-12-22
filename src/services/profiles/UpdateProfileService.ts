import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { Profile } from "../../entities/Profile.entity";
import { ProfileRequest } from "../../types/profile/ProfileRequest.type";

export class UpdateProfileService {
    async execute(id: number, { name }: ProfileRequest) {
        const profileRepository = connectionSource.getRepository(Profile);

        const profile = await profileRepository.findOne({ where: { id: id, deleted_at: IsNull() }});

        if(!profile) return new Error('No profile found.');

        await profileRepository.update(id, { name });

        return profileRepository.findOne({ where: { id: id }});
    }
}
