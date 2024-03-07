import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1709782368758 implements MigrationInterface {
    name = 'Mig1709782368758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`quiz\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(80) NOT NULL, \`category\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`question\` (\`id\` int NOT NULL AUTO_INCREMENT, \`question\` varchar(255) NOT NULL, \`answer\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL, \`ownerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`twitch_id\` varchar(40) NOT NULL, \`display_name\` varchar(40) NOT NULL, \`profile_picture\` varchar(155) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quiz_question\` (\`quizId\` int NOT NULL, \`questionId\` int NOT NULL, INDEX \`IDX_13b266ec53985f521fb503a072\` (\`quizId\`), INDEX \`IDX_2ebbbffc3d71d220cb170bb779\` (\`questionId\`), PRIMARY KEY (\`quizId\`, \`questionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_saved_quiz\` (\`userId\` int NOT NULL, \`quizId\` int NOT NULL, INDEX \`IDX_bb5f00970fceb2a56ca4031336\` (\`userId\`), INDEX \`IDX_02e1ac0bc15b98d60d08c64783\` (\`quizId\`), PRIMARY KEY (\`userId\`, \`quizId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`question\` ADD CONSTRAINT \`FK_1816eb9cc1340c57fcd0145279f\` FOREIGN KEY (\`ownerId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quiz_question\` ADD CONSTRAINT \`FK_13b266ec53985f521fb503a072e\` FOREIGN KEY (\`quizId\`) REFERENCES \`quiz\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`quiz_question\` ADD CONSTRAINT \`FK_2ebbbffc3d71d220cb170bb7793\` FOREIGN KEY (\`questionId\`) REFERENCES \`question\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_saved_quiz\` ADD CONSTRAINT \`FK_bb5f00970fceb2a56ca4031336d\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_saved_quiz\` ADD CONSTRAINT \`FK_02e1ac0bc15b98d60d08c647837\` FOREIGN KEY (\`quizId\`) REFERENCES \`quiz\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_saved_quiz\` DROP FOREIGN KEY \`FK_02e1ac0bc15b98d60d08c647837\``);
        await queryRunner.query(`ALTER TABLE \`user_saved_quiz\` DROP FOREIGN KEY \`FK_bb5f00970fceb2a56ca4031336d\``);
        await queryRunner.query(`ALTER TABLE \`quiz_question\` DROP FOREIGN KEY \`FK_2ebbbffc3d71d220cb170bb7793\``);
        await queryRunner.query(`ALTER TABLE \`quiz_question\` DROP FOREIGN KEY \`FK_13b266ec53985f521fb503a072e\``);
        await queryRunner.query(`ALTER TABLE \`question\` DROP FOREIGN KEY \`FK_1816eb9cc1340c57fcd0145279f\``);
        await queryRunner.query(`DROP INDEX \`IDX_02e1ac0bc15b98d60d08c64783\` ON \`user_saved_quiz\``);
        await queryRunner.query(`DROP INDEX \`IDX_bb5f00970fceb2a56ca4031336\` ON \`user_saved_quiz\``);
        await queryRunner.query(`DROP TABLE \`user_saved_quiz\``);
        await queryRunner.query(`DROP INDEX \`IDX_2ebbbffc3d71d220cb170bb779\` ON \`quiz_question\``);
        await queryRunner.query(`DROP INDEX \`IDX_13b266ec53985f521fb503a072\` ON \`quiz_question\``);
        await queryRunner.query(`DROP TABLE \`quiz_question\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`question\``);
        await queryRunner.query(`DROP TABLE \`quiz\``);
    }

}
