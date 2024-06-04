import { Module } from '@nestjs/common';
import { BrothsController } from './controllers/broths.controller';
import { BrothsService } from './services/brothes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Broth } from './entities/broths.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Broth])],
  controllers: [BrothsController],
  providers: [BrothsService],
})
export class BrothsModule {}
