import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @ApiProperty()
  brothId: number;

  @IsNumber()
  @ApiProperty()
  proteinId: number;
}
