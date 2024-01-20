/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'client'})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({})
    name: string

    @Column()
    lastname: string

    @Column()
    address: string

    @Column()
    email: string

    @Column()
    city: string

    @Column()
    phone: number
}
