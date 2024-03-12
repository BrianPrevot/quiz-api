import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QueryBuilder, Repository } from 'typeorm';
import { quizDto } from './dto/quiz.dto';


@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository : Repository<Quiz>
  ) {}

  create(quiz : quizDto){
    this.quizRepository.save(quiz)
  }
}
