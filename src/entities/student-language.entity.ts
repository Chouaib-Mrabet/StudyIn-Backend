import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { RatingEnum } from 'src/enums/rating.enum';

@Entity('studentlanguage')
export class StudentLanguageEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RatingEnum,
    })
    rating: string;
}
