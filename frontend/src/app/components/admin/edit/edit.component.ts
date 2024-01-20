import { Component, OnInit, Optional } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from "../../../interfaces/rooms";
import { ToastrService } from 'ngx-toastr';
import { DataSharingService } from 'src/app/services/data-sharing.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{


  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private dataSharingService: DataSharingService ) {
  }

  edit: boolean = false;
  
  room: Room = {
    id: 0,
    title: '',
    description: '',
    imageUrl: '',
    price: 0,
  }

  

  ngOnInit(): void {  
    const id = this.activatedRoute.snapshot.params['id']; 
    this.adminService.getRoom(id).subscribe(
      (res) => {
        console.log(res);
        this.room = res;
      },
      err => console.error(err)
    );
  }

  sendDataRoom() {
    this.dataSharingService.sendDataRoom(this.room)
  }

  createRoom() {
    if (!this.room.title || !this.room.description) {
      this.toastr.error('Por favor, complete todos los campos', 'Error');
      return;
    }

    this.adminService.createRoom(this.room).subscribe(
      (res: Room) => {
        console.log(res);
        this.toastr.success('Habitación creada con éxito', 'Éxito');
        this.router.navigate(['/admin']);
        this.edit = false;
      },
      err => {
        console.error(err);
        this.toastr.error('Error al crear la habitación', 'Error');
      }
    );
  }

  updateRoom() {
    const id = this.activatedRoute.snapshot.params['id'];

    // Realiza las validaciones aquí, si es necesario
    if (!this.room.title || !this.room.description) {
      this.toastr.error('Por favor, complete todos los campos', 'Error');
      return;
    }

    this.adminService.updateRoom(id, this.room).subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('Habitación actualizada con éxito', 'Éxito');
        this.router.navigate(['/admin']);
        this.edit = true;
      },
      err => {
        console.error(err);
        this.toastr.error('Error al actualizar la habitación', 'Error');
      }
    );
  }
}
