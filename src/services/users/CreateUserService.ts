import connectionSource from "../../database/ormconfig";
import { Profile } from "../../entities/Profile.entity";
import { User } from "../../entities/User.entity";
import { UserRequest } from "../../types/user/UserRequest.type";
import { PasswordCrypto } from "../crypto/PasswordCrypto";

export class CreateUserService {
    async execute(userRequest: UserRequest): Promise<User | Error> {
        const { username } = userRequest; 
        const { profile_id } = userRequest;
        const { password } = userRequest;
        
        userRequest.password = await PasswordCrypto.encryptPassowrd(password);

        const profileRepository = connectionSource.getRepository(Profile);
        const userRepository = connectionSource.getRepository(User);

        if(!await profileRepository.findOne({ where: { id: profile_id } }))
        return new Error('Profile does not exists!');

        let user = userRepository.create({
            ...userRequest,
            profile_id: Number(userRequest.profile_id)
        });

        if(await userRepository.findOne({ where: { username } })) return new Error('User already exists!');

        await userRepository.save(user);

        return {
            ...user,
            password: ''
        };
    }
}