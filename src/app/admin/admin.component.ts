import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  options = ["one", "two"];
  constructor() { }

  ngOnInit(): void {
  }

  search($event){
    console.log($event);
  }

}
