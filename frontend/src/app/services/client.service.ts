import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Client } from "../interfaces/client";
import { Observable } from 'rxjs';
import { Cards } from '../interfaces/cards';
import { Room } from '../interfaces/rooms';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  createClient(user: Client): Observable<Client>  {
    return this.http.post<Client>(`${this.BASE_URL}/client`, user)
  }

  createCard(card: Cards, price: number): Observable<Cards> {
    return this.http.post<Cards>(`${this.BASE_URL}/form/card`, {card, price})
  }

}
