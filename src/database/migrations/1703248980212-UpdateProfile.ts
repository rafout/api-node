import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateProfile1703248980212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "profiles" ALTER COLUMN "deleted_at" DROP NOT NULL;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "profiles" ALTER COLUMN "deleted_at" SET NOT NULL;
        `);
    }

}
