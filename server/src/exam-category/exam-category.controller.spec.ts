import { Test, TestingModule } from '@nestjs/testing';
import { ExamCategoryController } from './exam-category.controller';
import { ExamCategoryService } from './exam-category.service';

describe('ExamCategoryController', () => {
  let controller: ExamCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamCategoryController],
      providers: [ExamCategoryService],
    }).compile();

    controller = module.get<ExamCategoryController>(ExamCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
