import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnauthorizedResponseDto } from 'src/common/dtos/unauthorized-response.dto';
import { OrderResponseDto } from '../dtos/orders-response.dto';

@Controller('order')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  @ApiHeader({
    name: 'x-api-key',
    description: 'API key to access this endpoint',
    required: true,
  })
  @ApiResponse({
    status: 201,
    type: OrderResponseDto,
  })
  @ApiResponse({
    status: 401,
    type: UnauthorizedResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request',
    schema: {
      example: {
        error: 'both brothId and proteinId are required',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    schema: {
      example: {
        error: 'Failed to generate order ID',
      },
    },
  })
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
