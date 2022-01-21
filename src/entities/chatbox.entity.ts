import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { MessageEntity } from './message.entity';
import { StudentEntity } from 'src/student/entities/student.entity';

@Entity('chatbox')
export class ChatboxEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        default: false
    })
    closed: boolean;

    @OneToMany(() => MessageEntity, message => message.chatbox)
    messages: MessageEntity[];

    // evey chatbox has two students and evey student can have many chatboxs :
    @ManyToOne(() => StudentEntity, student1 => student1.chatboxs)
    student1: StudentEntity;

    // not sure about this
    @ManyToOne(() => StudentEntity, student2 => student2.chatboxs)
    student2: StudentEntity;

}
