import { Injectable } from '@nestjs/common';

@Injectable()
export class BrothsService {
  private broths = [
    {
      id: '1',
      imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
      imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
      name: 'Salt',
      description: 'Simple like the seawater, nothing more',
      price: 10,
    },
  ];

  findAll() {
    return this.broths;
  }
}
