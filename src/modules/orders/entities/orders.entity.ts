import { Broth } from 'src/modules/broths/entities/broths.entity';
import { Protein } from 'src/modules/proteins/entities/proteins.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => Broth)
  broth: Broth;

  @ManyToOne(() => Protein)
  protein: Protein;
}
