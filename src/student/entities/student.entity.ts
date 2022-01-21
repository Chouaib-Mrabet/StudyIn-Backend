import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { ExperienceEntity } from 'src/entities/experience.entity';
import { CertificateEntity } from 'src/entities/certificate.entity';
import { ApplicationEntity } from 'src/entities/application.entity';
import { ChatboxEntity } from 'src/entities/chatbox.entity';
import { StudentLanguageEntity } from 'src/entities/student-language.entity';
import { PostEntity } from 'src/entities/post.entity';

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

    @OneToMany(() => ChatboxEntity, chatbox => chatbox.student1)
    chatboxs: ChatboxEntity[];

    @OneToMany(() => StudentLanguageEntity, studentLanguage => studentLanguage.student)
    studentLanguages: StudentLanguageEntity[];

    @OneToMany(() => PostEntity, post => post.student)
    posts: PostEntity[];
    studentSkills: any;
}
