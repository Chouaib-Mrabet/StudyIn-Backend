import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StudentEntity } from 'src/student/entities/student.entity';
import { SkillEntity } from './skill.entity';
import { ApplicationEntity } from './application.entity';

@Entity('post')
export class PostEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => StudentEntity, student => student.posts)
    student: StudentEntity;

    @OneToMany(() => ApplicationEntity, application => application.post)
    application: ApplicationEntity[];

    @ManyToMany(() => SkillEntity)
    @JoinTable()
    skills: SkillEntity[];
    applications: any;
}
