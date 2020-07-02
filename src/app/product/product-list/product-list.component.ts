import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/productData';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  loading = true;

  pageSize: number = 12;
  page: number = 1;

  sortOrder: string[] = ["Price: high to low", "Price: low to high"];
  productData: ProductData[] = [];
  productIds: string[] = [];

  constructor(private service: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {


    //fetch product from db based on search/dropdown
    this.fetchProducts();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.productData = [];
      this.productIds = [];
      this.fetchProducts();
    });


  }

  fetchProducts() {
    this.service.fetchProductData().subscribe(data => {
      let categ = this.route.snapshot.params['category'];
      let category = categ.replace(/-/g, ' ');
      if (data) {
        for (let key in data) {
          if (category === data[key].category || category === data[key].subCategory)
            this.productData.push(data[key]);
          this.productIds.push(key);
        }
        this.loading = false;
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
