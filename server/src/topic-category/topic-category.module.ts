import { Module } from '@nestjs/common';
import { TopicCategoryService } from './topic-category.service';
import { TopicCategoryController } from './topic-category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TopicCategory } from './entities/topic-category.entity';

@Module({
  imports: [SequelizeModule.forFeature([TopicCategory])],
  controllers: [TopicCategoryController],
  providers: [TopicCategoryService],
})
export class TopicCategoryModule {}
