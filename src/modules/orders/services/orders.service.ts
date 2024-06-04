import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OrdersService {
  private orders = [];

  async create(order) {
    const newOrder = {
      id: await this.generateOrderId(),
      ...order,
    };
    this.orders.push(newOrder);

    return newOrder;
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
