import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { Profile } from "../../entities/Profile.entity";

export class DeleteProfileService {
    async execute(id: number) {
        const profileRepository = connectionSource.getRepository(Profile);

        const profile = await profileRepository.findOne({ where: { id: id, deleted_at: IsNull()  }});

        if(!profile) return new Error('No profile found!');

        await profileRepository.update(id, { deleted_at: new Date() });

        return { message: 'Profile deleted successfully!'};
    }
}
