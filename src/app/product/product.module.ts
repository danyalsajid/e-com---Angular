import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CheckoutFormComponent } from './cart/checkout-form/checkout-form.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductDetailComponent, CartComponent, CartListComponent, CartSummaryComponent, CheckoutFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ProductModule { }
