import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'broths' })
export class Broth {
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
