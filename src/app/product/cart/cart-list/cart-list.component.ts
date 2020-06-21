import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartSummary = {
    totalItems: 0,
    totalItemsPrice: 0,
    totalPrice: 0,
    deliveryCharges: 0,
  };
  
  cartData = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.cartData = this.service.cartData; //fetch from db
    this.calculatePrice();
  }

  calculatePrice() {
    this.cartSummary.totalItems = 0;
    this.cartSummary.totalItemsPrice = 0;
    this.cartSummary.totalPrice = 0;
    this.cartSummary.deliveryCharges = 100;

    this.cartData.forEach(element => {
      this.cartSummary.totalItems += element.quantity;
      this.cartSummary.totalItemsPrice += element.price * element.quantity;
    });
    this.cartSummary.totalPrice = this.cartSummary.totalItemsPrice + this.cartSummary.deliveryCharges;
  }

  decQty(i) {
    if (this.cartData[i].quantity > 1) {
      this.cartData[i].quantity--;
      this.calculatePrice();
      this.saveData();
    }
  }

  incQty(i) {
    this.cartData[i].quantity++;
    this.calculatePrice();
    this.saveData();
  }

  onRemoveItem(i) {
    this.cartData.splice(i, 1);
    this.calculatePrice();
    this.saveData();
  }

  saveData() {
    //save to db
    this.service.cartData = this.cartData;
    this.service.cartSummary = this.cartSummary;
  }

}
