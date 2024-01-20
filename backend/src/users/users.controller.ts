/* eslint-disable prettier/prettier */
import { Controller, Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('client')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    this.usersService.createUser(newUser)
    return console.log({message: 'Create User successfully'})
  }
}
