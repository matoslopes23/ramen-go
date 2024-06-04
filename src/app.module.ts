import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyMiddleware } from './common/middlewares/api-key.middleware';
import { BrothsModule } from './modules/broths/broths.module';
import { ConfigModule } from '@nestjs/config';
import { ProteinsModule } from './modules/proteins/proteins.module';

@Module({
  imports: [ConfigModule.forRoot(), BrothsModule, ProteinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
