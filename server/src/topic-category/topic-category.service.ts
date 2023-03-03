import { Injectable } from '@nestjs/common';
import { CreateTopicCategoryDto } from './dto/create-topic-category.dto';
import { UpdateTopicCategoryDto } from './dto/update-topic-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TopicCategory } from './entities/topic-category.entity';

@Injectable()
export class TopicCategoryService {
  constructor(
    @InjectModel(TopicCategory)
    private TopicCategoryEntity: typeof TopicCategory,
  ) {}
  async create(createTopicCategoryDto: CreateTopicCategoryDto) {
    await this.TopicCategoryEntity.create(createTopicCategoryDto);
    return null;
  }

  async findAll() {
    return await this.TopicCategoryEntity.findAll({
      where: {
        isDelete: 0,
      },
    });
  }

  async findByExamId(examId: number) {
    return await this.TopicCategoryEntity.findAll({
      where: {
        examId,
      },
    });
  }

  async findOne(id: number) {
    return await this.TopicCategoryEntity.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTopicCategoryDto: UpdateTopicCategoryDto) {
    await this.TopicCategoryEntity.update(updateTopicCategoryDto, {
      where: { id },
    });
    return null;
  }

  async remove(id: number) {
    await this.TopicCategoryEntity.update(
      { isDelete: 1 },
      {
        where: { id },
      },
    );
    return null;
  }
}
