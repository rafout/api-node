import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config()

const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/entities/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscriber/**/*{.ts,.js}'],
})

connectionSource.initialize()
.then(() => console.log('Connection initialized'))
.catch(err => console.log(err));

export default connectionSource;