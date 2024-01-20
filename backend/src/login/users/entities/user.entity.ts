/* eslint-disable prettier/prettier */

import { RolEntity } from "src/login/rol/entities/rol.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class UserEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 10, nullable: true})
    name: string;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    nameUser: string;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;
    
    @ManyToMany(() => RolEntity, rol => rol.users, {eager: true})
    @JoinTable({
        name: 'user_rol',
        joinColumn: {name: 'user_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: RolEntity[];
}