import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';

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
}
