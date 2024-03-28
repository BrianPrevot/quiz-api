import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';
import { Repository } from 'typeorm';
import { UpdateQuestionDto } from './dto/update-question.dto';


@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository : Repository<Question>
  ){}

  async create(question : CreateQuestionDto){
    /* const quest = {
      question : "2+2",
      answer : "4",
      ownerId : 1,
      CategoryId : 1,
    } */
      await this.questionRepository.save(question)
  }

  async updateQuestion(question : UpdateQuestionDto){
    const {id, ...updateData} = question; // object destructuring with rest
    try{
    await this.questionRepository.createQueryBuilder()
          .update(Question)
          .set(updateData)
          .where("id = :id",{id : question.id})
          .execute();
    }catch(e){
      throw new Error("update failed : "+ e)
    }
  }
}
