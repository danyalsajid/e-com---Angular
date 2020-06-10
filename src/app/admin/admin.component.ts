import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sideMenuOptions: { name: string, icon: string, active: boolean }[] = [
    { name: "Add Home Page", icon: "fa-home", active: true },
    { name: "View/Edit Home Page", icon: "fa-home", active: false },
    { name: "Add Category", icon: "fa-list", active: false },
    { name: "View/Edit Category", icon: "fa-list", active: false },
    { name: "Add Product", icon: "fa-archive", active: false },
    { name: "View/Edit Product", icon: "fa-archive", active: false },
    { name: "View/Edit Order", icon: "fa-file-text-o", active: false },
    { name: "View/Edit Complaint", icon: "fa-exclamation-circle", active: false },
  ];

  selectedSideMenuOption: string = this.sideMenuOptions[0].name;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectMenu(sideMenuOption: string) {
    this.selectedSideMenuOption = sideMenuOption;
    for (const iterator of this.sideMenuOptions) {
      if (sideMenuOption === iterator.name) {
        iterator.active = true;
      } else {
        iterator.active = false;
      }
    }
  }

  logout(){
  }


}
