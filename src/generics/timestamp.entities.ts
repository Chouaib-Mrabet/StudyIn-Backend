import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export class TimestampEntities {
    @CreateDateColumn(
        {
            update: false
        }
    )
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}