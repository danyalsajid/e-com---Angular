import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { GiftCouponsComponent } from './gift-coupons/gift-coupons.component';
import { ComplaintBoxComponent } from './complaint-box/complaint-box.component';
import { AboutComponent } from './about/about.component';
import { WarrentyComponent } from './warrenty/warrenty.component';


@NgModule({
  declarations: [HomeComponent, HomePageComponent, HowToOrderComponent, GiftCouponsComponent, ComplaintBoxComponent, AboutComponent, WarrentyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
