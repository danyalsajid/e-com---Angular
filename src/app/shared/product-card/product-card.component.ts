import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  productCardData = {
    name: "Product Name",
    category: "Category",
    percentOff: 30,
    price: 300,
    offPrice: 270,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
