import { Entity, Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Profile } from "./Profile.entity";

@Entity('users')
export class User {
    @PrimaryColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    name!: string;

    @Column()
    document!: string;

    @CreateDateColumn()
    created_at!: Date;

    @DeleteDateColumn()
    deleted_at!: Date;

    @Column()
    profile_id!: number;

    @ManyToOne(() => Profile)
    @JoinColumn({name: 'profile_id'})
    profile!: Profile;
}
