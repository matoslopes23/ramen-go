import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyMiddleware } from './common/middlewares/api-key.middleware';
import { BrothsModule } from './broths/broths.module';
import { BrothsController } from './broths/broths.controller';

@Module({
  imports: [BrothsModule],
  controllers: [AppController, BrothsController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
