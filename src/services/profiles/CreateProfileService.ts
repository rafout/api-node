import connectionSource from "../../database/ormconfig";
import { Profile } from "../../entities/Profile.entity";
import { ProfileRequest } from "../../types/profile/ProfileRequest.type";

export class CreateProfileService {
    async execute({ name }: ProfileRequest): Promise<Profile | Error> {
        const profileRepository = connectionSource.getRepository(Profile);

        const profile = profileRepository.create({ name });

        if(await profileRepository.findOne({ where: { name } })) return new Error('Profile already exists');

        await profileRepository.save(profile);

        return profile;
    }
}
