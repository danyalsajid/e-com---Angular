import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from '../models/productData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  finalPrice = 0;
  @Input() product: ProductData = {
    name: "",
    category: "",
    percentOff: 0,
    price: 0,
    imgUrl: "",
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    // percent off price (if percent off)
    if (this.product.percentOff > 0) {
      this.finalPrice = Math.ceil(this.product.price - (this.product.price / 100) * this.product.percentOff);
    } else {
      this.finalPrice = this.product.price;
    }
  }

  selectProduct() {
    this.router.navigate(['/product/product-detail']);
  }
  
  addToCart(event) {
    event.stopPropagation();
    console.log("add to cart");
  }
}
