import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';


@Entity('projects') 
export class Project {
    @PrimaryGeneratedColumn()
    id!: number; 

    @Column()
    title!: string;

    @Column()
    resume!: string

    @Column()
    img_url_1!: string | null;

    @Column()
    img_url_2!: string | null;

    @Column()
    img_url_3!: string | null;

    @Column()
    img_url_4!: string | null;

    @Column()
    github_link!: string | null

}