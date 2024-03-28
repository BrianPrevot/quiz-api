import { PartialType } from '@nestjs/mapped-types';
import { CreateFalseAnswerDto } from './create-false-answer.dto';

export class UpdateFalseAnswerDto extends PartialType(CreateFalseAnswerDto) {}
