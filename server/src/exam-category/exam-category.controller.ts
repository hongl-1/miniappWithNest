import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExamCategoryService } from './exam-category.service';
import { CreateExamCategoryDto } from './dto/create-exam-category.dto';
import { UpdateExamCategoryDto } from './dto/update-exam-category.dto';

@Controller('exam-category')
export class ExamCategoryController {
  constructor(private readonly examCategoryService: ExamCategoryService) {}

  @Post()
  create(@Body() createExamCategoryDto: CreateExamCategoryDto) {
    return this.examCategoryService.create(createExamCategoryDto);
  }

  @Get()
  findAll() {
    return this.examCategoryService.findAll();
  }

  @Get('tree')
  getTree() {
    return this.examCategoryService.tree();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamCategoryDto: UpdateExamCategoryDto,
  ) {
    return this.examCategoryService.update(+id, updateExamCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examCategoryService.remove(+id);
  }
}
