/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';


@Controller('form')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post('/card')
  createCard(@Body() createCardDto: CreateCardDto, createRoomDto: {price}): number {
    const checkIn = new Date(createCardDto.checkInDate);
    const checkOut = new Date(createCardDto.checkOutDate);
    const days = (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24); // Diferencia en días
    const totalPrice = days * createRoomDto.price;
    this.cardsService.createCard(createCardDto);
    return totalPrice;
  }
}
