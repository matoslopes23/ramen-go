import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Broth } from '../entities/broths.entity';
import { InjectRepository } from '@nestjs/typeorm';

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
  constructor(
    @InjectRepository(Broth)
    private readonly brothsRepo: Repository<Broth>,
  ) {}

  async findAll(): Promise<Broth[]> {
    const brothsResult = await this.brothsRepo.find();

    if (brothsResult.length == 0) return this.broths as any[];

    return brothsResult;
  }

  async findOne(id: number): Promise<Broth> {
    const broth = await this.brothsRepo.findOne({ where: { id } });

    if (!broth) {
      throw new BadRequestException('Broth not found');
    }

    return broth;
  }
}
