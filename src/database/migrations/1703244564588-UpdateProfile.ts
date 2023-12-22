import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateProfile1703244564588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE profiles
            RENAME COLUMN updated_at TO deleted_at
        `)
        await queryRunner.query(`
            ALTER TABLE profiles
            ALTER COLUMN deleted_at SET DEFAULT null
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE profiles
            ALTER COLUMN deleted_at DROP DEFAULT
        `)
        await queryRunner.query(`
            ALTER TABLE profiles
            RENAME COLUMN deleted_at TO updated_at
        `)
    }

}
