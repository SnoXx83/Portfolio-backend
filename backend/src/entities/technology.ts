import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';


@Entity('technologies') 
export class Technology {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  name!: string; 

  @Column()
  img_url!: string | null;

}