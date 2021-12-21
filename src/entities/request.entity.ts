import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StatusEnum } from 'src/enums/status.enum';

@Entity('request')
export class RequestEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: StatusEnum,
        default: StatusEnum.Pending
    })
    status: string;
}
