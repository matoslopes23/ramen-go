import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import { Order } from '../entities/orders.entity';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { BrothsService } from 'src/modules/broths/services/brothes.service';
import { ProteinsService } from 'src/modules/proteins/services/proteins.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,

    private readonly brotherService: BrothsService,
    private readonly proteinService: ProteinsService,
  ) {}

  async create(dto: CreateOrderDto) {
    const { brothId, proteinId } = dto;

    const [protein, broth] = await Promise.all([
      this.brotherService.findOne(brothId),
      this.proteinService.findOne(proteinId),
    ]);

    const orderId = await this.generateOrderId();

    const order = this.orderRepo.create({
      id: orderId,
      description: `${broth.name} and ${protein.name} Ramen`,
      protein,
      broth,
    });

    await this.orderRepo.save(order);

    return {
      id: orderId,
      description: order.description,
      image: order.image,
    };
  }

  private async generateOrderId(): Promise<string> {
    try {
      const response = await axios.post(
        `${process.env.REDVENTURES_API_URL}`,
        {},
        {
          headers: {
            'x-api-key': `${process.env.REDVENTURES_API_KEY}`,
          },
        },
      );
      return response.data.orderId;
    } catch (error) {
      throw new HttpException(
        'Failed to generate order ID',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
