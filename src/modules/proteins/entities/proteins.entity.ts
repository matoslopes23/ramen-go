import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'proteins' })
export class Protein {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageInactive: string;

  @Column()
  imageActive: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
