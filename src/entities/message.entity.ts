import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StudentEntity } from 'src/student/entities/student.entity';

@Entity('message')
export class MessageEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    //@ManyToOne(() => StudentEntity)
    //@JoinColumn({ name: 'id' })
    //public sender: StudentEntity
}
