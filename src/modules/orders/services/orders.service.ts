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
        'https://api.tech.redventures.com.br/orders/generate-id',
        {},
        {
          headers: {
            'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf',
          },
        },
      );
      return response.data.id;
    } catch (error) {
      throw new HttpException(
        'Failed to generate order ID',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
