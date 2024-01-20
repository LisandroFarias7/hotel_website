/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: "card"})
export class Card {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numberCard: number

    @Column()
    dateC: string

    @Column()
    headline: string

    @Column()
    segurityCode: number
}
