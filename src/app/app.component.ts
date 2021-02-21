import { Component } from '@angular/core';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'HostAdvantage';
  bolt = faBolt;
  server = faServer;
  home = faHome;
  signin = faSignInAlt;
  userIcon = faUser;
  signedin = false;

  currentUser = new User();

  constructor() {
  }

  ngOnInit(): void {
     
  }

  updateUser(user){
    this.currentUser = user;
    this.signedin = true;
  }

  logoutUser(){
    this.currentUser = new User();
    this.signedin = false;
  }
}
