import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FalseAnswerService } from './false-answer.service';
import { CreateFalseAnswerDto } from './dto/create-false-answer.dto';
import { UpdateFalseAnswerDto } from './dto/update-false-answer.dto';

@Controller('false-answer')
export class FalseAnswerController {
  constructor(private readonly falseAnswerService: FalseAnswerService) {}

  @Post()
  create(@Body() createFalseAnswerDto: CreateFalseAnswerDto) {
    return this.falseAnswerService.create(createFalseAnswerDto);
  }

  @Get()
  findAll() {
    return this.falseAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.falseAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFalseAnswerDto: UpdateFalseAnswerDto) {
    return this.falseAnswerService.update(+id, updateFalseAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.falseAnswerService.remove(+id);
  }
}
