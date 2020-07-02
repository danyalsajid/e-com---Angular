import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';
import { HomeService } from 'src/app/home/home.service';
import { ProductData } from '../models/productData';
import { CategoryData } from '../models/categoryData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  categories: string[] = [];// searh bar suggestion category
  dropDownList: { option: string, subOptions?: string[] }[] = []; //drop down categories

  constructor(
    private router: Router,
    private authService: AuthService,
    private pService: ProductService,
    private hService: HomeService,
  ) { }

  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    // fetch all categories
    this.hService.fetchCategory().subscribe(data => {
      if (data) {
        for (const key in data) {
          let obj = {
            option: ""
          };
          obj["option"] = data[key].category;
          if (data[key]["subCategories"]) {
            obj["subOptions"] = data[key]["subCategories"];
          }
          this.dropDownList.push(obj);
        }
      }
    })

    // fetch all categories/subCategories of available products from db 
    this.pService.fetchProductData().subscribe(data => {
      const products = [];
      if (data) {
        for (let key in data) {
          products.push(data[key]);

          if (data[key]["subCategory"]) {
            this.categories.push(data[key]["subCategory"]);
          }
          else {
            this.categories.push(data[key]["category"]);
          }
        }
      }
    }, error => console.log(error));
  }

  selectCategory(item) {
    this.router.navigate(['/product/product-list/' + item.replace(/ /g, '-')]);
  }

  searh(item) {
    this.router.navigate(['/product/product-list/' + item.replace(/ /g, '-')]);
  }

  onLogIn() {

  }

  onSelectUserOption($event) {
    if ($event === "Log out") {
      this.authService.logout();
    }
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
