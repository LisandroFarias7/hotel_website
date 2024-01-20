/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [],
    providers: [],
    exports: []
})
export class UsersModule {
    
}
