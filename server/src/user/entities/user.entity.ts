import { Column, Table, Model } from 'sequelize-typescript';

@Table({ modelName: 'r_user' })
export class User extends Model<User> {
  @Column({})
  username: string;

  @Column({})
  openid: string;
}
