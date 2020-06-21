import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalItems = 0;
  totalItemsPrice = 0;
  totalPrice = 0;
  deliveryCharges = 0;

  cartData = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.cartData = this.service.cartData; //fetch from db
    this.calculatePrice();
  }

  calculatePrice() {
    this.totalItems = 0;
    this.totalItemsPrice = 0;
    this.totalPrice = 0;
    this.deliveryCharges = 100;

    this.cartData.forEach(element => {
      this.totalItems += element.quantity;
      this.totalItemsPrice += element.price * element.quantity;
    });
    this.totalPrice = this.totalItemsPrice + this.deliveryCharges;
  }

  decQty(i) {
    if (this.cartData[i].quantity > 1) {
      this.cartData[i].quantity--;
      this.calculatePrice();
    }
  }

  incQty(i) {
    this.cartData[i].quantity++;
    this.calculatePrice();
  }

  onRemoveItem(i) {
    this.cartData.splice(i, 1);
    this.calculatePrice();
  }

  onPlaceOrder() {
    // save to db
    this.service.cartData = this.cartData;
    let cartSummary = {
      totalItems: this.totalItems,
      totalItemsPrice: this.totalItemsPrice,
      totalPrice: this.totalPrice,
      deliveryCharges: this.deliveryCharges,
    }
    this.service.cartSummary = cartSummary;
  }

}
