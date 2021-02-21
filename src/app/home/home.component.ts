import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  clickCounter: number = 0;
  name: string = 'meow';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1;
  }

  //insertUser(){
  //  return HttpClient.post('http://localhost:44328/api/WebApI/callBcknd', data);
  //}
}
