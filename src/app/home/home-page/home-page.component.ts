import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { ProductData } from 'src/app/shared/models/productData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productData: ProductData[] = [];
  productIds: string[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {

    // fetch all products from db 
    this.service.fetchProductData().subscribe(data => {
      if (data) {
        let products = [];
        for (let key in data) {
          products.push(data[key]);
          this.productIds.push(key);
        }

        //sort product according to date added
        products.sort(function (a, b) {
          let dateA = new Date(a.dateAdded).getTime(), dateB = new Date(b.dateAdded).getTime();
          return dateA - dateB;
        });

        // only show 4 products here 
        for (let i = 0; i < products.length; i++) {
          if (i >= 4) {
            break;
          }
          this.productData.push(products[i]);
        }
      }
    }, error => console.log(error));

  }

}

