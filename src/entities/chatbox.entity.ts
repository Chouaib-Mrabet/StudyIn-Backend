import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';

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

}
