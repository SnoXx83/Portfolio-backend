import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import { Project } from './project';


@Entity() 
export class Technology {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column({ type: "varchar", length: 255, unique: true })
  name!: string; 

  @Column({ 
        type: "varchar", 
        length: 2048, 
        nullable: true 
    })
  img_url!: string;

  @ManyToMany(()=> Project, (project)=>project.technologies)
  projects!: Project[];
}