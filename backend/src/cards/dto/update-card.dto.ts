/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCardDto } from './create-card.dto';

export class UpdateCardDto extends PartialType(CreateCardDto) {
    numberCard: number
    dateC: string
    headline: string
    segurityCode: number
    checkInDate: Date
    checkOutDate: Date
}
