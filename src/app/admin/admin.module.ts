import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AddHomeComponent } from './add-home/add-home.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';


@NgModule({
  declarations: [AdminComponent, AddHomeComponent, ViewHomeComponent, AddCategoryComponent, ViewCategoryComponent, AddProductComponent, ViewProductComponent, ViewOrderComponent, ViewComplaintComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule { }
