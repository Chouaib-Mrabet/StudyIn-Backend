import { TimestampEntities } from 'src/Generics/timestamp.entities';
export declare class StudentEntity extends TimestampEntities {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    title: string;
    description: string;
    location: string;
    rating: number;
}
