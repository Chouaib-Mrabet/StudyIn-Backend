import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';
import { StudentLanguageEntity } from './student-language.entity';

@Entity('language')
export class LanguageEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;

    @OneToMany(() => StudentLanguageEntity, studentLanguage => studentLanguage.language)
    studentLanguages: StudentLanguageEntity[];
}
