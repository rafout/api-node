import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { User } from "../../entities/User.entity";

export class GetByIdUserService {
    async execute(id: number) {
        const userRepository = connectionSource.getRepository(User);

        const result = await userRepository.findOne({ where: { id: id, deleted_at: IsNull() }});

        if(!result) return new Error('No user found!');

        return {
            ...result,
            password: ''
        };
    }
}