import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StudentSkillEntity } from './student-skill.entity';

@Entity('skill')
export class SkillEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;

    @OneToMany(() => StudentSkillEntity, studentSkill => studentSkill.skill)
    studentSkills: StudentSkillEntity[];
}
