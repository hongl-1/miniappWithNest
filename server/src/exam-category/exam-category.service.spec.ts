import { Test, TestingModule } from '@nestjs/testing';
import { ExamCategoryService } from './exam-category.service';

describe('ExamCategoryService', () => {
  let service: ExamCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamCategoryService],
    }).compile();

    service = module.get<ExamCategoryService>(ExamCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
