import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { TimestampEntities } from 'src/Generics/timestamp.entities';

@Entity('language')
export class LanguageEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;
}
