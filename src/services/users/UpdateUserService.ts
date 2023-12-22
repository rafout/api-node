import { IsNull } from "typeorm";
import connectionSource from "../../database/ormconfig";
import { User } from "../../entities/User.entity";
import { UserRequest } from "../../types/user/UserRequest.type";
import { PasswordCrypto } from "../crypto/PasswordCrypto";

export class UpdateUserService {
    async execute(id: number, userRequest: UserRequest){
        const userRepository = connectionSource.getRepository(User);
        const { password } = userRequest;

        const user = await userRepository.findOne({ where: { id: id, deleted_at: IsNull() }});

        if(!user) return new Error('No user found.');
        
        userRequest.password = await PasswordCrypto.encryptPassowrd(password);
        await userRepository.update(id, userRequest);

        const newUser = await userRepository.findOne({ where: { id: id }});

        return {
            ...newUser,
            password: ''
        };
    }
}