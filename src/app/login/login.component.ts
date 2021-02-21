import { Component, Input, OnInit } from '@angular/core';

import { User } from './user';
import { LoginService } from './login.service';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Input() userDetails = { fullName:'', userName:''}
  User: any = [];

  eyeSlash = faEyeSlash;
  passwordType = "password"

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  togglePassword(){
    if (this.passwordType == "password")
    {
      this.passwordType ="text";
      this.eyeSlash = faEye;
    }
    else{
      this.passwordType ="password";
      this.eyeSlash = faEyeSlash;
    }
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
