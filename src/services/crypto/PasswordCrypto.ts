import { compare, genSalt, hash } from "bcryptjs";

const SALT_RANDOMS = 8;

async function encryptPassowrd(password: string) {
    const salt = await genSalt(SALT_RANDOMS);

    const passowordEncrypted = await hash(password, salt);

    return passowordEncrypted;
};

async function verifyPassword(password: string, passwordEncrypted: string) {
    return await compare(password, passwordEncrypted);
};

export const PasswordCrypto = {
    encryptPassowrd,
    verifyPassword
};