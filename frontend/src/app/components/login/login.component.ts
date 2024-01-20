import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/interfaces/admin';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private readonly usersService: UsersService,
              private readonly toastr: ToastrService,
              private readonly router: Router) {}

  ngOnInit(): void {
    
  }
  
  user: Admin = {
    id: 1,
    username: '',
    password: ''
  }



  createAdmin() {
    this.usersService.login(this.user) 
    .subscribe(
      res => {
        this.toastr.success('usuario correcto'),
        this.router.navigate(['/admin'])}
    )
  }
}
