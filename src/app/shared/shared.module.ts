import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


@NgModule({
  declarations: [SharedComponent, DropdownComponent, SearchbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [
    DropdownComponent,
    SearchbarComponent,
  ]
})
export class SharedModule { }
