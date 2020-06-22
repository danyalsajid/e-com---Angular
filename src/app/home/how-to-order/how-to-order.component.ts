import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  templateUrl: './how-to-order.component.html',
  styleUrls: ['./how-to-order.component.css']
})
export class HowToOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
