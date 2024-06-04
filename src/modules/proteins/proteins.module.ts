import { Module } from '@nestjs/common';
import { ProteinsController } from './controllers/proteins.controller';
import { ProteinsService } from './services/proteins.service';

@Module({ controllers: [ProteinsController], providers: [ProteinsService] })
export class ProteinsModule {}
