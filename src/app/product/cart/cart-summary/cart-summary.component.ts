import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input() status = "";
  @Input() cartSummary = {
    totalItems: 0,
    totalItemsPrice: 0,
    totalPrice: 0,
    deliveryCharges: 0,
  };

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onPlaceOrder() {
    this.service.cartSummary = this.cartSummary; // save to db
    this.router.navigate(['product/cart/checkout']);
  }

  onConfrmOrder() {
  }
}
