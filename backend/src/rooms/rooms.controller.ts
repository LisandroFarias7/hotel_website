/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';


@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    this.roomsService.createRoom(createRoomDto);
    return console.log({message: 'Created Room Successfully'})
  }

  @Get()
  getRooms(): Promise<Room[]> {
    return this.roomsService.getRooms();
  }

  @Get(':id')
  getOneRoom(@Param('id', ParseIntPipe) id: number): Promise<Room> {
    return this.roomsService.getOneRoom(id);
  }

  @Patch(':id')
  updateRoom(@Param('id', ParseIntPipe) id: number, @Body() room: UpdateRoomDto) {
    return this.roomsService.updateRoom(id, room);
  }

  @Delete(':id')
  removeRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomsService.deleteRoom(id);
  }
}
