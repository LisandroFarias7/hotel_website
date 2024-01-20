/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardsService {

  constructor(@InjectRepository(Card) private userRepository: Repository<Card>) {}
  
  createCard(card: CreateCardDto) {
    const newCard = this.userRepository.create(card);
    return this.userRepository.save(newCard)
  }
  
}
