import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { RatingEnum } from 'src/enums/rating.enum';
import { SkillEntity } from './skill.entity';
import { StudentEntity } from 'src/student/entities/student.entity';

@Entity('studentskill')
export class StudentSkillEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RatingEnum,
    })
    rating: string;

    @ManyToOne(() => SkillEntity, skill => skill.studentSkills)
    skill: SkillEntity;

    @ManyToOne(() => StudentEntity, student => student.studentSkills)
    student: StudentEntity;
}
