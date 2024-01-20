/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */


import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolNombre } from "../enum/rol.enum";
import { UserEntity } from "src/login/users/entities/user.entity";

@Entity({name: 'rol'})
export class RolEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    rolName: RolNombre;

    @ManyToMany(type => UserEntity, user => user.roles)
    users: UserEntity[];

}