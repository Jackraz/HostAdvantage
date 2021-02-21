import { Component, Input, OnInit } from '@angular/core';

import { User } from './user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Input() userDetails = { fullName:'', userName:''}
  User: any = [];

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    return this.loginService.getUsers().subscribe((data: {}) =>{
      this.User = data;
    })
  }

  addUser(){
    this.loginService.addUser(this.userDetails).subscribe(data => {
      //this.id = data.id;
      this.getUsers();
    });
  }
  
  deleteUser(id){
    this.loginService.deleteUser(id).subscribe(data => {
      this.getUsers();
    });
  }

  updateUser(user){
    this.loginService.updateUser(user.id, user).subscribe(data => {
      console.log(user)
      this.getUsers();
    });
  }
}
