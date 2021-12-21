import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';

@Entity('student')
export class StudentEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    firstName: string;

    @Column({ length: 50 })
    lastName: string;

    @Column({
        length: 50,
        unique: true,
    })
    username: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column()
    rating: number;

    //skills: SkillEntity[];
}
