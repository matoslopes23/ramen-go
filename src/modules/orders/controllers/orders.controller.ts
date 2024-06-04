import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    if (!createOrderDto.brothId || !createOrderDto.proteinId) {
      throw new HttpException(
        'both brothId and proteinId are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.ordersService.create(createOrderDto);
  }
}
