import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    name: "Product 1",
    category: "Category",
    percentOff: 30,
    price: 300,
    imgUrl: "../../assets/electronics-banner-02.jpg",
    img2Url: "../../assets/electronics-banner-02.jpg",
    img3Url: "../../assets/electronics-banner-02.jpg",
    rating: 4.5,
    description: "Ad illum natoque volutpat leo curabitur est nisi reprehenderit quisque illo ullam scelerisque viverra taciti voluptatum adipiscing omnis vel augue convallis anim dis quis et molestiae, eos aenean corrupti neque? Interdum, quisque diam molestie porta iaculis earum? Non magni bibendum eum fugiat, fringilla donec",
    reviews: [
      {
        reviewer: "Name Surename",
        date: "5 Sep 2020",
        review: "Porta corporis nibh. Adipisci maiores dui torquent porttitor wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt deleniti facilisi, est orci libero.",
      },
      {
        reviewer: "Name Surename",
        date: "5 Sep 2020",
        review: "Porta corporis nibh. Adipisci maiores dui torquent porttitor wisi necessitatibus lorem perspiciatis repudiandae ad nesciunt deleniti facilisi, est orci libero.",
      },
    ]
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.displayImg = this.product.imgUrl;

    // percent off price (if percent off)
    if (this.product.percentOff > 0) {
      this.finalPrice = Math.ceil(this.product.price - (this.product.price / 100) * this.product.percentOff);
    } else {
      this.finalPrice = this.product.price;
    }
  }

  showImage(img) {
    this.displayImg = img;
  }

  buyNow() {
    this.router.navigate(['/product/cart']);
  }
}
