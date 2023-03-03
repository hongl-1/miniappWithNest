import { Column, Model, Table } from 'sequelize-typescript';

@Table({ modelName: 'r_exam_category' })
export class ExamCategory extends Model<ExamCategory> {
  @Column({})
  title: string;

  @Column({ defaultValue: 0 })
  isDelete: number;

  @Column({ defaultValue: 0 })
  parentId: number;
}
