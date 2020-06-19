import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showDropdown = false;
  showSubDropdown = false;

  dropDownList = [
    {
      name: "Product Name Name",
      subDropdownItem : [
        {name: "Sub Product Name"},
        {name: "Sub Product "},
        {name: "Sub Product Name"},
      ]
    },
    {
      name: "Product Name",
    },
    {
      name: "Product Name",
      subDropdownItem : [
        {name: "Sub Product Name"},
        {name: "Sub Product Name"},
        {name: "Sub Product Name"},
      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onClickedOutside(e: Event) {
    this.showDropdown = false;
  }

}
