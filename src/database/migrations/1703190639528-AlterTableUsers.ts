import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableUsers1703190639528 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users
            ADD COLUMN "profile" int
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE users
            DROP COLUMN "profile"
        `)
    }

}
