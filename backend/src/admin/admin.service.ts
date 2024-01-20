/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {

  constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>) {}

  async getAdmins() {
    return await this.adminRepository.find()
  }

  async getAdmin(id: number) {
    return await this.adminRepository.findOne({
      where: {
        id
      }
    })
  }

  async createAdmin(admin: CreateAdminDto) {
    const newAdmin = await this.adminRepository.create(admin)
    return this.adminRepository.save(newAdmin)
  }

  async getOneByUsername(username: string) {
    return await this.adminRepository.findOneBy({username})
  }
  
  updateAdmin(id: number, admin: UpdateAdminDto) {
    return this.adminRepository.update({id}, admin);
  }

  deleteAdmin(id: number) {
    return this.adminRepository.delete({id});
  }
}
