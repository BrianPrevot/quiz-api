import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { User } from "src/user/entities/user.entity";
import { Quiz } from "./quiz/entities/quiz.entity";
import { Question } from "./question/entities/question.entity";
import { DataSource } from "typeorm";



config();

const configService = new ConfigService();

const typeOrmConfig = new DataSource({
    type: 'mysql',
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    database: configService.getOrThrow<string>('DATABASE_NAME'),
    username: configService.getOrThrow<string>('DATABASE_USER'),
    migrations: ['src/migration/**'],
    entities: [User, Question,Quiz ],
    logging: true,
    synchronize: true,
});

export default typeOrmConfig;