import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/productData';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageSize: number = 12;
  page: number = 1;

  sortOrder: string[] = ["Price: high to low", "Price: low to high"];
  products: ProductData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 1070,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 200,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 280,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 2000,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 200,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 280,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 2000,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 200,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 280,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 2000,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 200,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 280,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 2000,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 200,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 280,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 2000,
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
      },
      {
        name: "Product 1",
        category: "Category",
        percentOff: 30,
        price: 1500,
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
      },
    ];
  }

  sortProducts(sortOrder) {
    this.products.sort(function (a, b) {
      if (sortOrder === "Price: low to high") {
        return a.price - b.price;
      } else if (sortOrder === "Price: high to low") {
        return b.price - a.price;
      }
    });
  }

  changePage($event){
    this.page = $event;
    window.scrollTo(0, 0);
  }
}
