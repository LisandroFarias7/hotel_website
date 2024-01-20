import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./components/main/main.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { OffersComponent } from './components/offers/offers.component';
import { GaleryComponent } from './components/galery/galery.component';
import { FormComponent } from './components/form/form.component';
import { FormCardComponent } from './components/form/form-card/form-card.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'inicio',
    component: MainComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'ofertas',
    component: OffersComponent
  },
  {
    path: 'galeria',
    component: GaleryComponent
  },
  {
    path: 'form/card',
    component: FormCardComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/edit',
    component: EditComponent
  },
  {
    path: 'admin/edit/:id',
    component: EditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
