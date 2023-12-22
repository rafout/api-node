import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { User } from "../../entities/User.entity";

export class GetAllUsersService {
    async execute(): Promise<User[] | Error> {
        const userRepository = connectionSource.getRepository(User);

        const users = await userRepository.find({
            select: ['id', 'username', 'name', 'created_at', 'deleted_at', 'profile_id'],
            where: { deleted_at: IsNull() }
        });

        if(!users) return new Error('No users found');

        return users;
    }
}