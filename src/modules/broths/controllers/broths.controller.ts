import { Controller, Get } from '@nestjs/common';
import { BrothsService } from '../services/brothes.service';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnauthorizedResponseDto } from 'src/common/dtos/unauthorized-response.dto';
import { BrothResponseDto } from '../dtos/broths-response.dto';

@Controller('broths')
@ApiTags('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Get()
  @ApiHeader({
    name: 'x-api-key',
    description: 'API key to access this endpoint',
    required: true,
  })
  @ApiResponse({
    status: 200,
    type: BrothResponseDto,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    type: UnauthorizedResponseDto,
  })
  findAll() {
    return this.brothsService.findAll();
  }
}
