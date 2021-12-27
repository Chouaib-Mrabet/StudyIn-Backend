import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { ExperienceEntity } from 'src/entities/experience.entity';
import { CertificateEntity } from 'src/entities/certificate.entity';
import { ApplicationEntity } from 'src/entities/application.entity';

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

    @OneToMany(() => ExperienceEntity, experience => experience.student)
    experiences: ExperienceEntity[];

    @OneToMany(() => CertificateEntity, certificate => certificate.student)
    certificates: CertificateEntity[];

    @OneToMany(() => ApplicationEntity, application => application.student)
    application: ApplicationEntity[];

    //skills: SkillEntity[];
}
