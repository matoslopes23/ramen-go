import { Module } from '@nestjs/common';
import { BrothsController } from './controllers/broths.controller';
import { BrothsService } from './services/brothes.service';

@Module({ controllers: [BrothsController], providers: [BrothsService] })
export class BrothsModule {}
