import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    
  }

  isMenuOpen = false;

  toggleMenu() {
    console.log('Se hizo clic en el menú hamburguesa'); // Agregar este mensaje de depuración
    this.isMenuOpen = !this.isMenuOpen;
  }

}
