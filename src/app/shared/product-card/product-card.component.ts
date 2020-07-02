import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { ProductData } from '../models/productData';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  showAddToCartModal = false;

  finalPrice = 0;
  @Input() product: ProductData = {
    category: "",
    subCategory: "",
    productName: "",
    imgUrls: [],
    productDescription: "",
    productPrice: 0,
    perOff: "",
    perOffValue: 0,
    inStock: "",
    quantity: 0,
    dateAdded: ""
  }
  @Input() productId = "";
  constructor(private router: Router, private pService: ProductService) { }

  ngOnInit(): void {
    // percent off price (if percent off)
    if (this.product.perOffValue > 0) {
      this.finalPrice = Math.ceil(this.product.productPrice - (this.product.productPrice / 100) * this.product.productPrice);
    } else {
      this.finalPrice = this.product.productPrice;
    }
  }

  selectProduct() {
    this.router.navigate(['/product/product-detail/' + this.productId]);
  }

  addToCart(event) {
    event.stopPropagation();
    let productToCart = {
      productName: this.product.productName,
      imgUrl: this.product.imgUrls[0],
      price: this.product.productPrice,
      quantity: 1,
    }
    this.pService.cartData.push(productToCart);
    this.showAddToCartModal = true;
  }

  viewCart() {
    this.router.navigate(['/product/cart']);
  }
}
