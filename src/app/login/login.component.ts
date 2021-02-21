import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AppComponent } from '../app.component'
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
  
  @Input() userDetails = { fullName:'', userName:'', password:''}
  User: any = [];

  eyeSlash = faEyeSlash;
  passwordType = "password"
  signInToggle = false


  constructor(
    public loginService: LoginService,
    public myapp: AppComponent,
    public router: Router
  ) { }

  ngOnInit(): void {
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
  login(){
    this.loginService.login(this.userDetails).subscribe(data => {
      this.myapp.updateUser(data)
      //this.router.navigate(['action-selection'], { state: { example: 'bar' } });
      this.router.navigate(['']);
    });
  }

  addUser(){
    this.loginService.addUser(this.userDetails).subscribe(data => {
      if(data.id != "")
        this.myapp.updateUser(data)
    });
  }
}
