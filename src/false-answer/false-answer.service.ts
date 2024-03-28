import { Injectable } from '@nestjs/common';
import { CreateFalseAnswerDto } from './dto/create-false-answer.dto';
import { UpdateFalseAnswerDto } from './dto/update-false-answer.dto';

@Injectable()
export class FalseAnswerService {
  create(createFalseAnswerDto: CreateFalseAnswerDto) {
    return 'This action adds a new falseAnswer';
  }

  findAll() {
    return `This action returns all falseAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} falseAnswer`;
  }

  update(id: number, updateFalseAnswerDto: UpdateFalseAnswerDto) {
    return `This action updates a #${id} falseAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} falseAnswer`;
  }
}
