import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from '../models/productData';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  showAddToCartModal = false;

  finalPrice = 0;
  @Input() product: ProductData = {
    name: "",
    category: "",
    percentOff: 0,
    price: 0,
    imgUrl: "",
  }
  constructor(private router: Router, private pService: ProductService) { }

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
    let productToCart = {
      productName: this.product.name,
      imgUrl: this.product.imgUrl,
      price: this.product.price,
      quantity: 1,
    }
    this.pService.cartData.push(productToCart);
    this.showAddToCartModal = true;
  }

  viewCart(){
    this.router.navigate(['/product/cart']);
  }
}
