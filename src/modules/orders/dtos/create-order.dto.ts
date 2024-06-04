import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @ApiProperty()
  brothId: string;

  @IsString()
  @ApiProperty()
  proteinId: string;
}
