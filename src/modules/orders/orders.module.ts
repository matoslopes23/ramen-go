import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { BrothsModule } from '../broths/broths.module';
import { ProteinsModule } from '../proteins/proteins.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), BrothsModule, ProteinsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
