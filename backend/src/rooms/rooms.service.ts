/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {

  constructor(@InjectRepository(Room) private roomRepository: Repository<Room>) {}
  
  async createRoom(room: CreateRoomDto): Promise<Room> {
    const newRoom = await this.roomRepository.create(room)
    return this.roomRepository.save(newRoom)
  }

  async getRooms() {
    return await this.roomRepository.find()
  }

  async getOneRoom(id: number): Promise<Room> {
    return await this.roomRepository.findOne({
      where: {
        id 
      }
    });
  }

  async updateRoom(id: number, room: UpdateRoomDto) {
    return await this.roomRepository.update({id}, room)
  }

  async deleteRoom(id: number) {
    return await this.roomRepository.delete({ id });
  }
}
