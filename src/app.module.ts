import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwitchAuthModule } from '@nestjs-hybrid-auth/twitch';
import { AuthController } from './auth/auth.controller';
import { QuestionModule } from './question/question.module';
import { DataSource } from 'typeorm';
import typeOrmConfig from './typeORM.config';
import { config } from 'dotenv';
import { Question } from './question/entities/question.entity';
import { Quiz } from './quiz/entities/quiz.entity';
import { User } from './user/entities/user.entity';



@Module({
  imports: [UserModule,
  TypeOrmModule.forRootAsync({
    imports :[ConfigModule],
    inject : [ConfigService],
    useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    database: configService.getOrThrow<string>('DATABASE_NAME'),
    username: configService.getOrThrow<string>('DATABASE_USER'),
    migrations: ['src/migrations/**'],
    entities: [User, Question,Quiz ],
    logging: true,
    synchronize: false,
    })
  }),
  QuizModule,
  ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
    expandVariables: true,
  }),
TwitchAuthModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService : ConfigService) => ({
    clientID: configService.get('TWITCH_CLIENT_ID'),
    clientSecret: configService.get('TWITCH_CLIENT_SECRET'),
    callbackURL: configService.get('TWITCH_CALLBACK_URL'),
    scope : 'user:read',
    
  }),
}),
QuestionModule,
],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
