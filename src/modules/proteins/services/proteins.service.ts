import { Injectable } from '@nestjs/common';

@Injectable()
export class ProteinsService {
  private proteins = [
    {
      id: '1',
      imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
      imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
      name: 'Chasu',
      description:
        'A sliced flavorful pork meat with a selection of season vegetables.',
      price: 10,
    },
  ];

  findAll() {
    return this.proteins;
  }
}
