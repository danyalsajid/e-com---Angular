import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  confirmOrder = false;

  cartSummary = {
    totalItems: 0,
    totalItemsPrice: 0,
    totalPrice: 0,
    deliveryCharges: 0,
  };

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.cartSummary = this.service.cartSummary; // fetch from db
    this.confirmOrder = this.service.confirmOrder; // fetch from db
  }

  onConfirmOrder() {
    this.confirmOrder = true;
    this.service.confirmOrder = this.confirmOrder;
  }

}
