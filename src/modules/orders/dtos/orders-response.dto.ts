import { ApiProperty } from '@nestjs/swagger';

export class OrderResponseDto {
  @ApiProperty({ example: '12345' })
  id: string;

  @ApiProperty({ example: 'Salt and Chasu Ramen' })
  description: string;

  @ApiProperty({
    example: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png',
  })
  image: string;
}
