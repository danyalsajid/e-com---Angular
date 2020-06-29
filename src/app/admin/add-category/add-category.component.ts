import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  subCategoriesInput = [];
  subCategoriesInputIndex = 0;

  constructor(private service: AdminService) { }

  ngOnInit(): void {
  }

  addSubCategory() {
    this.subCategoriesInputIndex++;
    this.subCategoriesInput.push("subCategory" + this.subCategoriesInputIndex.toString());
  }

  removeSubCategory() {
    this.subCategoriesInput.pop();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let categoryData = {
      category: form.value.category,
      subCategory: []
    };

    this.subCategoriesInput.forEach(item => {
      categoryData.subCategory.push(form.value[item]);
    });

    this.service.storeCategory(categoryData).subscribe(
      resData => console.log(resData),
      error => console.log(error)
    );

    form.reset();
    this.subCategoriesInput.splice(0, this.subCategoriesInput.length);
    this.subCategoriesInputIndex = 0;

  }

}
