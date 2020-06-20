import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/productData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products: ProductData[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        name: "Product 1",
        category: "Category 1",
        percentOff: 10,
        price: 400,
        imgUrl: "../../assets/electronics-banner-02.jpg",
      },
      {
        name: "Product 2",
        category: "Category 2",
        percentOff: 10,
        price: 200,
        imgUrl: "../../assets/electronics-banner-02.jpg",
      },
      {
        name: "Product 3",
        category: "Category 3",
        percentOff: 20,
        price: 2000,
        imgUrl: "../../assets/electronics-banner-02.jpg",
      },
      {
        name: "Product 4",
        category: "Category 4",
        percentOff: 15,
        price: 250,
        imgUrl: "../../assets/electronics-banner-02.jpg",
      },
    ];
  }

}
