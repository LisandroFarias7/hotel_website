import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Room } from "../interfaces/rooms";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  async getRooms(): Promise<Observable<Room[]>> {
    return await this.http.get<Room[]>(`${this.BASE_URL}/rooms`)
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.BASE_URL}/rooms/${id}`)
  }
}
