import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [DropdownComponent, SearchbarComponent, HeaderComponent, FooterComponent, ProductCardComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    DropdownComponent,
    SearchbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
  ]
})
export class SharedModule { }
