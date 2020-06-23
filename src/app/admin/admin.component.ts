import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {routerLink
  sideMenuOptions: { name: string, icon: string, routerLink: string }[] = [
    { name: "Add Home Page", icon: "fa-home", routerLink: "/admin/add-home" },
    { name: "View/Edit Home Page", icon: "fa-home", routerLink: "/admin/view-home" },
    { name: "Add Category", icon: "fa-list", routerLink: "/admin/add-category" },
    { name: "View/Edit Category", icon: "fa-list", routerLink: "/admin/view-category" },
    { name: "Add Product", icon: "fa-archive", routerLink: "/admin/add-product" },
    { name: "View/Edit Product", icon: "fa-archive", routerLink: "/admin/view-product" },
    { name: "View/Edit Order", icon: "fa-file-text-o", routerLink: "/admin/view-order" },
    { name: "View/Edit Complaint", icon: "fa-exclamation-circle", routerLink: "/admin/view-complaint" },
  ];

  selectedSideMenuOption: string = this.sideMenuOptions[0].name;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectMenu(sideMenuOption: string) {
    this.selectedSideMenuOption = sideMenuOption;
  }

  logout(){
  }


}
