import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnauthorizedResponseDto } from 'src/common/dtos/unauthorized-response.dto';

import { ProteinsService } from '../services/proteins.service';
import { ProteinsResponseDto } from '../dtos/proteins-response.dto';

@Controller('proteins')
@ApiTags('proteins')
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Get()
  @ApiHeader({
    name: 'x-api-key',
    description: 'API key to access this endpoint',
    required: true,
  })
  @ApiResponse({
    status: 200,
    type: ProteinsResponseDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    type: UnauthorizedResponseDto,
  })
  findAll() {
    return this.proteinsService.findAll();
  }
}
