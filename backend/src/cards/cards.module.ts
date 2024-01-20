import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { RoomsModule } from 'src/rooms/rooms.module';

@Module({
  imports: [RoomsModule, TypeOrmModule.forFeature([Card])],
  controllers: [CardsController],
  providers: [CardsService],
  exports: [CardsModule],
})
export class CardsModule {}
