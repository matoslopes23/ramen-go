import { Broth } from 'src/modules/broths/entities/broths.entity';
import { Protein } from 'src/modules/proteins/entities/proteins.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column({
    default: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png',
  })
  image: string;

  @ManyToOne(() => Broth)
  broth: Broth;

  @ManyToOne(() => Protein)
  protein: Protein;
}
