import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from 'src/question/entities/question.entity';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([
    Quiz,
    Question
  ])],
  providers: [QuizService],
})
export class QuizModule {}
