/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/rooms.module';
import { AdminModule } from './admin/admin.module';
import { CardsModule } from './cards/cards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './login/users/users.module';
import { RolModule } from './login/rol/rol.module';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
}),
TypeOrmModule.forRoot({
    type: 'mysql', //tipo de base de datos
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    port: 3306,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true
  }),
    UsersModule, RoomsModule, AdminModule, CardsModule, RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
