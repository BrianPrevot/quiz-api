import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { QuizModule } from './quiz/quiz.module';

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
  QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
