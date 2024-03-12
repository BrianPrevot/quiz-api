import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([
    Quiz
  ])],
  providers: [QuizService],
})
export class QuizModule {}
