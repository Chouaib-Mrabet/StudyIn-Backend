import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StatusEnum } from 'src/enums/status.enum';
import { StudentEntity } from 'src/student/entities/student.entity';

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

    @ManyToOne(type => StudentEntity)
    @JoinColumn()
    sender: StudentEntity

    @ManyToOne(type => StudentEntity)
    @JoinColumn()
    reciever: StudentEntity
}
