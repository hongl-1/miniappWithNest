import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';
import { TopicCategoryModule } from './topic-category/topic-category.module';
import { ExamCategoryModule } from './exam-category/exam-category.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '115.29.178.53',
      port: 3307,
      username: 'root',
      password: 'Hongliang123@',
      database: 'ruankao',
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
    TopicModule,
    UserModule,
    TopicCategoryModule,
    ExamCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
