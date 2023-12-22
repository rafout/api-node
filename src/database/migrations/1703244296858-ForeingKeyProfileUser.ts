import { MigrationInterface, QueryRunner } from "typeorm"

export class ForeingKeyProfileUser1703244296858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users
            RENAME COLUMN profile TO profile_id
        `)
        await queryRunner.query(`
            ALTER TABLE users
            ADD CONSTRAINT fk_profile
            FOREIGN KEY (profile_id)
            REFERENCES profiles(id)
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users
            DROP CONSTRAINT fk_profile
        `)
        await queryRunner.query(`
            ALTER TABLE users
            RENAME COLUMN profile_id TO profile
        `)
    }

}
