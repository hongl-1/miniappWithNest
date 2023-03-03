import { Module } from '@nestjs/common';
import { ExamCategoryService } from './exam-category.service';
import { ExamCategoryController } from './exam-category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExamCategory } from './entities/exam-category.entity';

@Module({
  imports: [SequelizeModule.forFeature([ExamCategory])],
  controllers: [ExamCategoryController],
  providers: [ExamCategoryService],
})
export class ExamCategoryModule {}
