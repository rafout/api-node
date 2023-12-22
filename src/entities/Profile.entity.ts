import { Entity, Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn } from "typeorm";

@Entity('profiles')
export class Profile {
    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;

    @CreateDateColumn()
    created_at!: Date;

    @DeleteDateColumn()
    deleted_at!: Date;
}
