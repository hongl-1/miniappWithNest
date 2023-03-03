import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  async create(@Body() createTopicDto: CreateTopicDto) {
    if (!createTopicDto.content) {
      return '请输入知识点内容';
    }
    return await this.topicService.create(createTopicDto);
  }

  @Get()
  async findAll() {
    return await this.topicService.findAll();
  }

  @Get('findByCategoryId')
  async findByCategoryId(
    @Query('categoryId') categoryId: string,
    @Query('audit') audit: number = null,
  ) {
    return await this.topicService.findByCategoryId(+categoryId, audit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopicDto: UpdateTopicDto) {
    return this.topicService.update(+id, updateTopicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topicService.remove(+id, { isDelete: 1 });
  }
}
