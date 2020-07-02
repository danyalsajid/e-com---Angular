import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/productData';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageSize: number = 12;
  page: number = 1;

  sortOrder: string[] = ["Price: high to low", "Price: low to high"];
  productData: ProductData[] = [];
  productIds: string[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.fetchProductData().subscribe(data => {
      if (data) {
        for (let key in data) {
          this.productData.push(data[key]);
          this.productIds.push(key);
        }
      }
    }, error => console.log(error));
  }

  sortProducts(sortOrder) {
    this.productData.sort(function (a, b) {
      if (sortOrder === "Price: low to high") {
        return a.productPrice - b.productPrice;
      } else if (sortOrder === "Price: high to low") {
        return b.productPrice - a.productPrice;
      }
    });
  }

  changePage($event) {
    this.page = $event;
    window.scrollTo(0, 0);
  }
}
