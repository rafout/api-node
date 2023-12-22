import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { Profile } from "../../entities/Profile.entity";

export class GetAllProfileService {
    async execute(): Promise<Profile[] | Error> {
        const profileRepository = connectionSource.getRepository(Profile);

        const profiles = await profileRepository.find({ where: { deleted_at: IsNull() }});

        if(!profiles) return new Error('No profiles found');

        return profiles;
    }
}
