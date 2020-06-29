import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CategoryData } from 'src/app/shared/models/categoryData';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  error = false;
  errorMessage = "";

  categoryData: CategoryData[] = [];
  categories: string[] = [];
  subCategories: string[] = [];
  yesNoOptions = ["Yes", "No"];

  selectedCategory = "";
  selectedSubCategory = "";
  perOff = "";
  inStock = "";

  productImageToUpload: File = null;
  productFileController = new FormControl(null, Validators.required);

  constructor(private service: AdminService) { }

  ngOnInit(): void {

    // fetch category Data
    this.service.fetchCategory().subscribe(data => {
      this.categoryData = [];
      if (data) {
        for (let key in data) {
          this.categoryData.push(data[key]);
        }

        this.categoryData.forEach(element => {
          this.categories.push(element.category);
        });
      }
    }, error => console.log(error))
  }

  selectCategory(category) {
    this.selectedCategory = category;
    this.categoryData.forEach(element => {
      if (element.category === category) {
        this.subCategories = element.subCategories;
      }
    });
  }

  selectSubCategory(subCategory) {
    this.selectedSubCategory = subCategory;
  }

  // image upload
  handleProductFileInput(files: FileList) {
    this.productImageToUpload = files.item(0);
  }

  getExtension(fileToUpload) {
    var parts = fileToUpload.name.split('.');
    return parts[parts.length - 1];
  }

  validFileFormatt(fileToUpload) {
    let ext = this.getExtension(fileToUpload);

    switch (ext.toLowerCase()) {
      case 'jpeg':
        return true;
      case 'png':
        return true;
      case 'jpg':
        return true;
      case 'gif':
        return true;
    }
    return false;
  }

  isImageValid() {
    if (this.productFileController.valid && this.validFileFormatt(this.productImageToUpload)) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid || this.selectedCategory === "" || this.selectedSubCategory === "") {
      this.error = true;
      this.errorMessage = "Error! Please input all values.";
      return;
    }

    if (!this.isImageValid()) {
      this.error = true;
      this.errorMessage = "Error! Please upload valid image formatt.";
      return;
    }

    let productData = {
      category: this.selectedCategory,
      subCategory: this.selectedSubCategory,
      productName: form.value.productName,
      productImage: this.productFileController.value ? this.productFileController.value : '',
      productDescription: form.value.productDescription,
      productPrice: form.value.productPrice,
      perOff: this.perOff,
      perOffVale: form.value.perOffValue ? form.value.perOffValue : 0,
      inStock: this.inStock,
      quantity: form.value.inStock ? form.value.quantity : 0,
    }

    // store in db
    console.log(productData);

    this.service.uploadImage(this.productImageToUpload);

    // reset form 
    form.reset()
    this.productImageToUpload = null;
    this.productFileController.setValue(null);
    this.error = false;

  }

}