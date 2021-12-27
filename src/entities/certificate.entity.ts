import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StudentEntity } from 'src/student/entities/student.entity';

@Entity('certificate')
export class CertificateEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    organization: string;

    @Column()
    reference: string;

    @ManyToOne(() => StudentEntity, student => student.experiences)
    student: StudentEntity;
}
