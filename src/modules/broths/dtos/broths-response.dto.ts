import { ApiProperty } from '@nestjs/swagger';

export class BrothResponseDto {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({
    example: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
  })
  imageInactive: string;

  @ApiProperty({
    example: 'https://tech.redventures.com.br/icons/salt/active.svg',
  })
  imageActive: string;

  @ApiProperty({ example: 'Salt' })
  name: string;

  @ApiProperty({ example: 'Simple like the seawater, nothing more' })
  description: string;

  @ApiProperty({ example: 10 })
  price: number;
}
