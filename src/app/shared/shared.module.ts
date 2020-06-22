import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SubDropdownComponent } from './sub-dropdown/sub-dropdown.component';
import { AddToCartModalComponent } from './modals/add-to-cart-modal/add-to-cart-modal.component';


@NgModule({
  declarations: [DropdownComponent, SearchbarComponent, HeaderComponent, FooterComponent, ProductCardComponent, SubDropdownComponent, AddToCartModalComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ClickOutsideModule
  ],
  exports: [
    DropdownComponent,
    SubDropdownComponent,
    SearchbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
  ]
})
export class SharedModule { }
