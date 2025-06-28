import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Technology } from './technology';


@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, unique: true })
  name!: string;

  @Column({ type: "varchar", length: 255 })
  resume!: string

  @Column({ type: "varchar", length: 2048, nullable: true })
  img_url_1!: string;

  @Column({ type: "varchar", length: 2048, nullable: true })
  img_url_2!: string;

  @Column({ type: "varchar", length: 2048, nullable: true })
  img_url_3!: string;

  @Column({ type: "varchar", length: 2048, nullable: true })
  img_url_4!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  github_link!: string;

  @ManyToMany(() => Technology, (technology) => technology.projects)
  @JoinTable({
    name: 'project_technologies',
    joinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'technology_id',
      referencedColumnName: 'id',
    },
  })
  technologies!: Technology[];

}