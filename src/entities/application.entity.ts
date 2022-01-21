import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StatusEnum } from 'src/enums/status.enum';
import { StudentEntity } from 'src/student/entities/student.entity';
import { PostEntity } from './post.entity';

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

    @ManyToOne(() => StudentEntity, student => student.experiences)
    student: StudentEntity;

    @ManyToOne(() => PostEntity, post => post.applications)
    post: PostEntity;

}
