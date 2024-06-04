import { ApiProperty } from '@nestjs/swagger';

export class ProteinsResponseDto {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({
    example: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
  })
  imageInactive: string;

  @ApiProperty({
    example: 'https://tech.redventures.com.br/icons/pork/active.svg',
  })
  imageActive: string;

  @ApiProperty({ example: 'Pork' })
  name: string;

  @ApiProperty({ example: 'Simple like the seawater, nothing more' })
  description: string;

  @ApiProperty({ example: 10 })
  price: number;
}
