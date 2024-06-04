import { Controller, Get } from '@nestjs/common';
import { BrothsService } from '../services/brothes.service';

@Controller('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Get()
  findAll() {
    return this.brothsService.findAll();
  }
}
