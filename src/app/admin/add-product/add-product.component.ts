import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CategoryData } from 'src/app/shared/models/categoryData';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {

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

  uploading = false;
  imgUrls: string[] = [];

  productImageToUpload1: File = null;
  productFileController1 = new FormControl(null, Validators.required);

  productImageToUpload2: File = null;
  productFileController2 = new FormControl(null, Validators.required);

  productImageToUpload3: File = null;
  productFileController3 = new FormControl(null, Validators.required);

  private downloadURLSub: Subscription;

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
  handleProductFileInput1(files: FileList) {
    this.uploading = true;
    this.productImageToUpload1 = files.item(0);
    this.service.uploadImage(this.productImageToUpload1);
    this.downloadURLSub = this.service.downloadURLSubject.subscribe(url => {
      this.imgUrls.push(url);
      this.uploading = false;
    });
  }

  handleProductFileInput2(files: FileList) {
    this.uploading = true;
    this.productImageToUpload2 = files.item(0);
    this.service.uploadImage(this.productImageToUpload2);
    this.service.downloadURLSubject.subscribe(url => {
      this.imgUrls.push(url);
      this.uploading = false;
    });
  }

  handleProductFileInput3(files: FileList) {
    this.uploading = true;
    this.productImageToUpload3 = files.item(0);
    this.service.uploadImage(this.productImageToUpload3);
    this.service.downloadURLSubject.subscribe(url => {
      this.imgUrls.push(url);
      this.uploading = false;
    });
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
    if (
      this.productFileController1.valid && this.validFileFormatt(this.productImageToUpload1)
      && this.productFileController2.valid && this.validFileFormatt(this.productImageToUpload2)
      && this.productFileController3.valid && this.validFileFormatt(this.productImageToUpload3)
    ) {
      return true;
    } else {
      return false;
    }
  }

  onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
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
    if (this.uploading) {
      this.error = true;
      this.errorMessage = "Error! Please wait for upload to complete.";
      return;
    }

    let uniqueImgUrls = this.imgUrls.filter( this.onlyUnique );
    let productData = {
      category: this.selectedCategory,
      subCategory: this.selectedSubCategory,
      productName: form.value.productName,
      imgUrls: uniqueImgUrls,
      productDescription: form.value.productDescription,
      productPrice: form.value.productPrice,
      perOff: this.perOff,
      perOffVale: form.value.perOffValue ? form.value.perOffValue : 0,
      inStock: this.inStock,
      quantity: form.value.quantity ? form.value.quantity : 0,
    }

    // store in db
    this.service.storeProduct(productData).subscribe(
      resData => console.log(resData),
      error => console.log(error)
    );


    // reset form 
    form.reset();
    this.imgUrls = [];
    this.productImageToUpload1 = null;
    this.productFileController1.setValue(null);
    this.productImageToUpload2 = null;
    this.productFileController2.setValue(null);
    this.productImageToUpload3 = null;
    this.productFileController3.setValue(null);
    this.error = false;

  }

  ngOnDestroy() {
    this.downloadURLSub.unsubscribe();
  }
}