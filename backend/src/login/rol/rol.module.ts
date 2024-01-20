/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RolEntity } from './entities/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RolEntity])],
    controllers: [RolController],
    providers: [RolService],
    exports: []
})
export class RolModule {}
