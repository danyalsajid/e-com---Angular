import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-coupons',
  templateUrl: './gift-coupons.component.html',
  styleUrls: ['./gift-coupons.component.css']
})
export class GiftCouponsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
