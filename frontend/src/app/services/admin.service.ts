import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Room } from '../interfaces/rooms';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  

  async getRooms(): Promise<Observable<Room[]>> {
    return await this.http.get<Room[]>(`${this.BASE_URL}/rooms`)
  }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.BASE_URL}/rooms/${id}`)
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.BASE_URL}/rooms`, room)
  }

  deleteRoom(id: number): Observable<Room> {
    return this.http.delete<Room>(`${this.BASE_URL}/rooms/${id}`)
  }

  updateRoom(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.BASE_URL}/rooms/${id}`, room)
  }

  createAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.BASE_URL}/admin`, admin)
  } 
  updateAdmin(id: number, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.BASE_URL}/admin/${id}`, admin)
  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.BASE_URL}/admin`)
  } 

  getAdmin(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.BASE_URL}/admin/${id}`)
  }

  deleteAdmin(id: number): Observable<Admin> {
    return this.http.delete<Admin>(`${this.BASE_URL}/admin/${id}`)
  }
}
