import { Module } from '@nestjs/common';
import { FalseAnswerService } from './false-answer.service';
import { FalseAnswerController } from './false-answer.controller';

@Module({
  controllers: [FalseAnswerController],
  providers: [FalseAnswerService],
})
export class FalseAnswerModule {}
