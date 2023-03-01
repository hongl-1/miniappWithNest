import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Topic } from './entities/topic.entity';
import sequelize from 'sequelize';

@Injectable()
export class TopicService {
  constructor(
    @InjectModel(Topic)
    private TopicModel: typeof Topic,
  ) {}
  async create(createTopicDto: CreateTopicDto) {
    await this.TopicModel.create(createTopicDto);
    return null;
  }

  async findAll() {
    return await this.TopicModel.findAll({
      where: {
        isDelete: 0,
      },
    });
  }

  async findOne(id: number) {
    return await this.TopicModel.findOne({
      where: { id, isDelete: 0 },
    });
  }

  async update(id: number, updateTopicDto: UpdateTopicDto) {
    // return `This action updates a #${id} topic`;
    await this.TopicModel.update(updateTopicDto, {
      where: { id },
    });
    return null;
  }

  async remove(id: number, updateTopicDto: UpdateTopicDto) {
    await this.TopicModel.update(updateTopicDto, {
      where: { id },
    });
    return null;
  }
}
