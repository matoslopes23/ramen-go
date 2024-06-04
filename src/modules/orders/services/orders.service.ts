import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [];

  create(order) {
    const newOrder = {
      id: this.orders.length + 1,
      ...order,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
