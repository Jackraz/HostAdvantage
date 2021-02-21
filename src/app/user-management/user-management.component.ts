import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  
  @Input() userDetails = { fullName:'', userName:''}
  User: any = [];

  constructor(public UserService: UserService) { }

  ngOnInit(): void {
  }

  // API Interactions //
  getUsers(){
    return this.UserService.getUsers().subscribe((data: {}) =>{
      this.User = data;
    })
  }

  addUser(){
    this.UserService.addUser(this.userDetails).subscribe(data => {
      //this.id = data.id;
      this.getUsers();
    });
  }
  
  deleteUser(id){
    this.UserService.deleteUser(id).subscribe(data => {
      this.getUsers();
    });
  }

  updateUser(user){
    this.UserService.updateUser(user.id, user).subscribe(data => {
      console.log(user)
      this.getUsers();
    });
  }
}
