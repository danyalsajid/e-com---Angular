import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showDropdown = false;
  showSubDropdown = false;
  categories: string[] = [];
  dropDownList = [
    {
      name: "Product Name Name",
      subDropdownItem: [
        { name: "Sub Product Name" },
        { name: "Sub Product" },
        { name: "Sub Product Name" },
      ]
    },
    {
      name: "Product Name",
    },
    {
      name: "Product Name",
      subDropdownItem: [
        { name: "Sub Product Name" },
        { name: "Sub Product Name" },
        { name: "Sub Product Name" },
      ]
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.categories = ["Category 1", "Category 2", "Category 3"]; // fetch from db
  }

  onShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  onClickedOutside(e: Event) {
    this.showDropdown = false;
  }

  selectItem(item) {
    if (item["subDropdownItem"]) {
      return;
    } else {
      this.router.navigate(['/product/product-list']);
    }
  }

}
