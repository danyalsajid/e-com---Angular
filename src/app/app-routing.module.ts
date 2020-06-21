import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { HowToOrderComponent } from './home/how-to-order/how-to-order.component';
import { GiftCouponsComponent } from './home/gift-coupons/gift-coupons.component';
import { ComplaintBoxComponent } from './home/complaint-box/complaint-box.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './product/cart/cart.component';
import { WarrentyComponent } from './home/warrenty/warrenty.component';
import { AboutComponent } from './home/about/about.component';
import { CartListComponent } from './product/cart/cart-list/cart-list.component';
import { CheckoutFormComponent } from './product/cart/checkout-form/checkout-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'how-to-order', component: HowToOrderComponent },
      { path: 'gift-coupons', component: GiftCouponsComponent },
      { path: 'complaint-box', component: ComplaintBoxComponent },
      { path: 'about', component: AboutComponent },
      { path: 'warrenty', component: WarrentyComponent },
    ]
  },
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'product', component: ProductComponent, children: [
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      {
        path: 'cart', component: CartComponent, children: [
          { path: '', redirectTo: '/product/cart/cart-list', pathMatch: 'full' },
          { path: 'cart-list', component: CartListComponent },
          { path: 'checkout', component: CheckoutFormComponent },
        ]
      },
    ]
  },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
