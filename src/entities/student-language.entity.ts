import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { RatingEnum } from 'src/enums/rating.enum';
import { LanguageEntity } from './language.entity';
import { StudentEntity } from 'src/student/entities/student.entity';

@Entity('studentlanguage')
export class StudentLanguageEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RatingEnum,
    })
    rating: string;

    @ManyToOne(() => LanguageEntity, language => language.studentLanguages)
    language: LanguageEntity;

    @ManyToOne(() => StudentEntity, student => student.studentLanguages)
    student: StudentEntity;
}
