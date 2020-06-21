import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: string[] = [];
  dropDownList: { option: string; subOptions?: { subOption: string }[] }[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.categories = ["Category 1", "Category 2", "Category 3"]; // fetch from db
    this.dropDownList = [ // fetch from db
      {
        option: "option 1",
        subOptions: [
          { subOption: "subOption 1" },
          { subOption: "subOption 2" },
        ],
      },
      {
        option: "option 2",
        subOptions: [
          { subOption: "subOption 1" },
          { subOption: "subOption 2" },
          { subOption: "subOption 3" },
        ],
      },
      {
        option: "option 3",
      },
    ];
  }

  selectCategory(item) {
    this.router.navigate(['/product/product-list']);
  }

}
