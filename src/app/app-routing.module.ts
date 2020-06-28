import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
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
import { AddHomeComponent } from './admin/add-home/add-home.component';
import { ViewHomeComponent } from './admin/view-home/view-home.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { ViewOrderComponent } from './admin/view-order/view-order.component';
import { ViewComplaintComponent } from './admin/view-complaint/view-complaint.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // home routes
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
  // product routes
  {
    path: 'product', component: ProductComponent, children: [
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      {
        path: 'cart', component: CartComponent, canActivate: [AuthGuard], children: [
          { path: '', redirectTo: '/product/cart/cart-list', pathMatch: 'full' },
          { path: 'cart-list', component: CartListComponent },
          { path: 'checkout', component: CheckoutFormComponent },
        ]
      },
    ]
  },
  // admin routes
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin/add-home', pathMatch: 'full' },
      { path: 'add-home', component: AddHomeComponent },
      { path: 'view-home', component: ViewHomeComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'view-category', component: ViewCategoryComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'view-product', component: ViewProductComponent },
      { path: 'view-order', component: ViewOrderComponent },
      { path: 'view-complaint', component: ViewComplaintComponent },
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
