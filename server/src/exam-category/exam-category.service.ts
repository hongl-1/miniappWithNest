import { Injectable } from '@nestjs/common';
import { CreateExamCategoryDto } from './dto/create-exam-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ExamCategory } from './entities/exam-category.entity';
import { UpdateExamCategoryDto } from './dto/update-exam-category.dto';

@Injectable()
export class ExamCategoryService {
  constructor(
    @InjectModel(ExamCategory)
    private ExamCategoryEntity: typeof ExamCategory,
  ) {}
  async create(createExamCategoryDto: CreateExamCategoryDto) {
    await this.ExamCategoryEntity.create(createExamCategoryDto);
    return null;
  }

  async findAll() {
    return await this.ExamCategoryEntity.findAll({
      where: {
        isDelete: 0,
      },
    });
  }

  async tree() {
    const list = await this.findAll();
    const res = [];
    const temp = []; // 暂无父节点的子节点
    list.forEach(({ dataValues: item }) => {
      if (!item.parentId) {
        res.push({
          ...item,
          children: [],
        });
      } else {
        const parentIndex = res.findIndex((t) => t.id === item.parentId);
        if (parentIndex > -1) {
          res[parentIndex].children.push(item);
        } else {
          temp.push(item);
        }
      }
    });
    temp.forEach((item) => {
      const parentIndex = res.findIndex((t) => t.id === item.parentId);
      if (parentIndex > -1) {
        res[parentIndex].children.push(item);
      }
    });
    return res;
  }

  async findOne(id: number) {
    return await this.ExamCategoryEntity.findAll({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateExamCategoryDto: UpdateExamCategoryDto) {
    await this.ExamCategoryEntity.update(updateExamCategoryDto, {
      where: { id },
    });
    return null;
  }

  async remove(id: number) {
    await this.ExamCategoryEntity.update(
      { isDelete: 1 },
      {
        where: { id },
      },
    );
    return null;
  }
}
