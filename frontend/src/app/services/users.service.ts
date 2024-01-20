import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = 'http://localhost:3000'

  constructor(private readonly http:HttpClient) { }


  login(user: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.BASE_URL}/login`, user) 
  }

  register(user: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.BASE_URL}/auth/login`, user)
  }

}
