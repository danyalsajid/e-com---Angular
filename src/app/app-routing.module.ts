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

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'how-to-order', component: HowToOrderComponent },
      { path: 'gift-coupons', component: GiftCouponsComponent },
      { path: 'complaint-box', component: ComplaintBoxComponent },
    ]
  },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
