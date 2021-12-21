import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { RatingEnum } from 'src/enums/rating.enum';

@Entity('studentskill')
export class StudentSkillEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RatingEnum,
    })
    rating: string;
}
