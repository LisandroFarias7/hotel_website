import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Room } from 'src/app/interfaces/rooms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{

  rooms: Room[] = []
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getRooms()
  }


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
  deleteRoom(id: number) {
    this.adminService.deleteRoom(id)
  }

}
