import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QueryBuilder } from 'typeorm';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { quizDto } from './dto/quiz.dto';


@Controller('quiz')
@ApiTags('Quiz')
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

  @Post('/addQuiz')
  public async addQuestion(
    @Param('question ID :') questionId : number,
    @Param('quiz ID :') quizId : number
  ){
    return this.quizService.addQuestion(questionId,quizId)
  }

  @Get('/:quizId')
  public async showQuiz(
    @Param('quizId') quizId : number
  ){
    return this.quizService.showQuiz(quizId)
  }
  

 
}
