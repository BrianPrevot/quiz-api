import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QueryBuilder } from 'typeorm';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { quizDto } from './dto/quiz.dto';


@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('/create')
  @ApiOperation({
    summary : '',
    description : '',
  })
  public async createQuiz(
    @Request() req,
    @Body() quiz: quizDto,
  ){
    return this.quizService.create(quiz)
  }
  

 
}
