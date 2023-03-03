import { Column, Table, Model } from 'sequelize-typescript';

@Table({ modelName: 'r_topic_category' })
export class TopicCategory extends Model<TopicCategory> {
  @Column({})
  title: string;

  @Column({})
  examId: number;

  @Column({ defaultValue: 0 })
  isDelete: number;
}
