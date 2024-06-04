import { Module } from '@nestjs/common';
import { ProteinsController } from './controllers/proteins.controller';
import { ProteinsService } from './services/proteins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Protein } from './entities/proteins.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Protein])],
  controllers: [ProteinsController],
  providers: [ProteinsService],
})
export class ProteinsModule {}
