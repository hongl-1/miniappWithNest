import { Column, Table, Model } from 'sequelize-typescript';

@Table({ modelName: 'r_topic' })
export class Topic extends Model<Topic> {
  @Column({})
  content: string;

  @Column({ defaultValue: 0 })
  isDelete: number;

  @Column({ defaultValue: 0 })
  audit: number;

  @Column({ defaultValue: null })
  categoryId: number;
}
