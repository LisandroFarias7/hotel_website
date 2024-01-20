import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CardsComponent } from '../cards/cards.component'
import { AdminService } from 'src/app/services/admin.service';
import { Room } from 'src/app/interfaces/rooms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{

    @ViewChild('slickModal') slickModal: any; // Referencia al elemento del slider

    constructor(private adminService: AdminService) {}

    ngOnInit(): void {
      this.getRooms()
    }

    rooms: Room[] = [];

    sliderConfig = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768, // Cambia el número según tus necesidades
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    ngAfterViewInit() {
      this.slickModal.slickGoTo(0); // Inicializa el slider en la primera tarjeta
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
}
