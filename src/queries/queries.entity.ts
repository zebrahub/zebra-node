import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Query {
  @PrimaryGeneratedColumn()
  id: number;
}
