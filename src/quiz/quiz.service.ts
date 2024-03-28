import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QueryBuilder, Repository, getConnection } from 'typeorm';
import { quizDto } from './dto/quiz.dto';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';
import { Question } from 'src/question/entities/question.entity';



@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository : Repository<Quiz>,
    @InjectRepository(Question)
    private readonly questionRepository : Repository<Question>
  ) {}

  async create(quiz : quizDto){
    await this.quizRepository.save(quiz)
  }

  async addQuestion(quizId : number, questionId : number){
    try{
      const quiz = await this.quizRepository.findOne({where : {id: quizId}, relations: ['questions']})
      const question = await this.questionRepository.findOne({where : {id: questionId}})

      if (!quiz || !question){
        throw new Error('Failed : "addQuestion()"')
      }

      quiz.questions.push(question)
      await this.quizRepository.save(quiz);
    }catch(e){
    throw new Error('Query failed : ' + e)
    }
  }

  async showQuiz(quizId: number){
    try{
      const quiz = await this.quizRepository
      .createQueryBuilder("quiz")
      .select()
      .innerJoinAndSelect('quiz.questions','questions')
      .where("quiz.id = :id",{id: quizId})
      .getOne()

      return quiz;
    }catch(e){
      throw new Error('Failed: showQuiz :'+e)
    }
    

  }
}
