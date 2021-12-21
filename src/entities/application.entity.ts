import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StatusEnum } from 'src/enums/status.enum';

@Entity('application')
export class ApplicationEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: StatusEnum,
        default: StatusEnum.Pending
    })
    status: string;

}
