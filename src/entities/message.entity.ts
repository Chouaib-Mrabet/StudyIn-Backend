import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StudentEntity } from 'src/student/entities/student.entity';
import { ChatboxEntity } from './chatbox.entity';

@Entity('message')
export class MessageEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(() => ChatboxEntity, chatbox => chatbox.messages)
    chatbox: ChatboxEntity;

    @ManyToOne(type => StudentEntity)
    @JoinColumn()
    sender: StudentEntity

    @ManyToOne(type => StudentEntity)
    @JoinColumn()
    reciever: StudentEntity
}
