import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  categories: string[] = [];
  dropDownList: { option: string; subOptions?: { subOption: string }[] }[] = [];

  constructor(
    private router: Router, 
    private authService: AuthService
    ) { }

  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });


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
