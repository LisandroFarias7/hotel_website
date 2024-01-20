import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/rooms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getRooms()
  }

  rooms: Room[] = [];

  mostrarBoton = false;

  async getRooms() {
    (await this.adminService.getRooms())
      .subscribe(
        res => {
          this.rooms = res;
        },
        err => console.log(err)
      )
  }

}
