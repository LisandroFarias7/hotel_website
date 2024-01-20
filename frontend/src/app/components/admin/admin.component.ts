import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/rooms';
import { AdminService } from 'src/app/services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  constructor(private adminService: AdminService, public toastr: ToastrService) {}

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

  deleteRoom(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta habitación?')) {
      this.adminService.deleteRoom(id).subscribe(
        res => {
          this.getRooms();
          this.toastr.success('Habitación eliminada con éxito', 'Éxito');
        },
        err => {
          console.error(err);
          this.toastr.error('Error al eliminar la habitación', 'Error');
        }
      );
    }
  }

  updateRoom(id: number, room: Room) {
    this.adminService.updateRoom(id, room).subscribe(
      res => {
        if (res) { // Supongamos que tu servicio devuelve un objeto con una propiedad 'success'
          this.toastr.success('Habitación actualizada con éxito', 'Éxito');
          // Realiza cualquier otra lógica necesaria después de la actualización exitosa
        } else {
          this.toastr.error('No se pudo actualizar la habitación', 'Error');
          // Realiza cualquier lógica adicional en caso de un error
        }
      },
      err => {
        console.error(err);
        this.toastr.error('Error al actualizar la habitación', 'Error');
        // Realiza cualquier lógica adicional en caso de un error
      }
    );
  }
}
