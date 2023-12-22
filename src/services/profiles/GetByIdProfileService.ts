import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { Profile } from "../../entities/Profile.entity";

export class GetByIdProfileService {
    async execute(id : number) {
        const profileRepository = connectionSource.getRepository(Profile);

        const profiles = await profileRepository.find({ where: { id: id, deleted_at: IsNull() }});

        if(!profiles) return new Error('No profile found');

        return profiles;
    }
}
