import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { User } from "../../entities/User.entity";

export class DeleteUserService {
    async execute(id: number) {
        const userRepository = connectionSource.getRepository(User);

        const user = await userRepository.findOne({ where: { id: id, deleted_at: IsNull() }  });

        if(!user) return new Error('User does not exists!');

        await userRepository.update(id, { deleted_at: new Date() });

        return { message: 'User deleted successfully!'};
    }
}