import { Component, Input, OnInit } from '@angular/core';

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
  signInToggle = false


  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getUsers()
  }

  //In Page Functions
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

  signUpToggle(){
    this.signInToggle = !this.signInToggle;
  }
  

  // API Interactions //
  addUser(){
    this.loginService.addUser(this.userDetails).subscribe(data => {
      //this.id = data.id;
      this.loginService.getUsers();
    });
  }

}
