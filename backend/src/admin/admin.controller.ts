/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() admin: CreateAdminDto) {
    return this.adminService.createAdmin(admin);
  }

  @Get()
  findAll() {
    return this.adminService.getAdmins();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.getAdmin(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() admin: UpdateAdminDto) {
    return this.adminService.updateAdmin(id, admin);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deleteAdmin(id);
  }
}
