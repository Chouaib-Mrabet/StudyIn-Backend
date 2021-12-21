import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { ExperienceTypeEnum } from 'src/enums/experience-type.enum';

@Entity('experience')
export class ExperienceEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    organization: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    currently: Boolean;

    @Column({
        type: 'enum',
        enum: ExperienceTypeEnum,
    })
    type: string;

}
