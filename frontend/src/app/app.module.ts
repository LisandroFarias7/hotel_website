import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { OffersComponent } from './components/offers/offers.component';
import { GaleryComponent } from './components/galery/galery.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { FormCardComponent } from './components/form/form-card/form-card.component';
import { FormClientComponent } from './components/form/form-client/form-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { CarouselComponent } from './components/galery/carousel/carousel.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RoomsComponent,
    OffersComponent,
    GaleryComponent,
    CardsComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    FormCardComponent,
    FormClientComponent,
    AdminComponent,
    EditComponent,
    CarouselComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    SlickCarouselModule,
    ToastrModule.forRoot({
      timeOut: 4000, // Tiempo de duración predeterminado en milisegundos
      positionClass: 'toast-top-right', // Posición de las notificaciones (arriba a la derecha)
      preventDuplicates: true, // Evitar mostrar notificaciones duplicadas
      progressBar: true, // Mostrar barra de progreso
      closeButton: true, // Mostrar botón de cierre
      progressAnimation: 'increasing', // Animación de la barra de progreso
      enableHtml: true, // Habilitar HTML en los mensajes
      newestOnTop: true, // Mostrar las notificaciones más nuevas en la parte superior
      tapToDismiss: true, // Cerrar notificaciones al hacer clic en ellas
      extendedTimeOut: 1000, // Tiempo de duración adicional para las notificaciones (en milisegundos)
    }),
  ],
  providers: [CardsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
