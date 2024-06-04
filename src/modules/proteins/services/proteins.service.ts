import { BadRequestException, Injectable } from '@nestjs/common';
import { Protein } from '../entities/proteins.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

  constructor(
    @InjectRepository(Protein)
    private readonly proteinsRepo: Repository<Protein>,
  ) {}

  async findAll(): Promise<Protein[]> {
    const proteinsResult = await this.proteinsRepo.find();

    if (proteinsResult.length == 0) return this.proteins as any[];

    return proteinsResult;
  }

  async findOne(id: number): Promise<Protein> {
    const protein = await this.proteinsRepo.findOne({ where: { id } });

    if (!protein) {
      throw new BadRequestException('Protein not found');
    }

    return protein;
  }
}
