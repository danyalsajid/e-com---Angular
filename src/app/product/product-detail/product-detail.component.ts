import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductData } from 'src/app/shared/models/productData';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  displayImg = "";
  finalPrice = 0;

  product: ProductData = {
    category: "",
    subCategory: "",
    productName: "",
    imgUrls: [],
    productDescription: "",
    productPrice: 0,
    perOff: "",
    perOffValue: 0,
    inStock: "",
    quantity: 0,
    dateAdded: "",
    rating: 0,
    reviews: [],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService,
  ) { }

  ngOnInit(): void {
    // scroll to top on route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // fetch product from db
    this.service.fetchProductData().subscribe(data => {
      const productKey = this.route.snapshot.params['productId'];
      this.product = data[productKey];

      // default selected image in image viewer
      this.displayImg = this.product.imgUrls[0];
    });

    // percent off price (if percent off)
    if (this.product.perOffValue > 0) {
      this.finalPrice = Math.ceil(this.product.productPrice - (this.product.productPrice / 100) * this.product.perOffValue);
    } else {
      this.finalPrice = this.product.productPrice;
    }
  }

  showImage(img) {
    this.displayImg = img;
  }

  buyNow() {
    this.router.navigate(['/product/cart']);
  }
}
