import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1710830792764 implements MigrationInterface {
    name = 'Mig1710830792764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`question\` CHANGE \`category\` \`category_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`ALTER TABLE \`question\` ADD \`category_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_5fd605f755be75e9ea3ee3fdc18\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_5fd605f755be75e9ea3ee3fdc18\``);
        await queryRunner.query(`ALTER TABLE \`question\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`ALTER TABLE \`question\` ADD \`category_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`question\` CHANGE \`category_id\` \`category\` varchar(255) NOT NULL`);
    }

}
