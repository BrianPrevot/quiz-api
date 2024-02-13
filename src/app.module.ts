import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { QuizModule } from './quiz/quiz.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwitchAuthModule } from '@nestjs-hybrid-auth/twitch';
import { AuthController } from './auth/auth.controller';


@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username: 'root',
    database : 'db_quiz',
    entities : [User],
    synchronize : true,
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
],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
