import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  adError: boolean = false;
  adSuccess: boolean = false;
  adImageToUpload: File = null;
  adTextController = new FormControl("", Validators.pattern(/^[A-Za-z]+$/));
  adFileController = new FormControl(null, Validators.required);

  infoError: boolean = false;
  infoSuccess: boolean = false;
  infoImageToUpload: File = null;
  infoTextController = new FormControl("", Validators.pattern(/^[A-Za-z]+$/));
  infoFileController = new FormControl(null, Validators.required);

  constructor() { }

  ngOnInit(): void {
  }


  getExtension(fileToUpload) {
    var parts = fileToUpload.name.split('.');
    return parts[parts.length - 1];
  }

  validFileFormatt(fileToUpload) {
    let ext = this.getExtension(fileToUpload);

    switch (ext.toLowerCase()) {
      case 'png':
      case 'jpeg':
      case 'gif':
        return true;
    }
    return false;
  }

  reset() {
    this.adError = false;
    this.adSuccess = false;
    this.adImageToUpload = null;
    this.adTextController.setValue("");
    this.adFileController.setValue(null);

    this.infoError = false;
    this.infoSuccess = false;
    this.infoImageToUpload = null;
    this.infoTextController.setValue("");
    this.infoFileController.setValue(null);
  }

  // Advertisment
  handleAdFileInput(files: FileList) {
    this.adImageToUpload = files.item(0);
  }

  isAdValid() {
    if (this.adTextController.value.length >= 1 && this.adFileController.valid && this.validFileFormatt(this.adImageToUpload)) {
      this.adError = false;
      return true;
    } else {
      this.adError = true;
      return false;
    }
  }

  addAdvertisement() {
    if (this.isAdValid()) {
      console.log(this.adTextController.value, this.adImageToUpload, this.adSuccess);
      this.adSuccess = true;
      setTimeout(() => {
        this.adSuccess = false;
      }, 3000)
      this.reset();
    }
  }

  // Information Center 
  handleInfoFileInput(files: FileList) {
    this.infoImageToUpload = files.item(0);
  }

  isinfoValid() {
    if (this.infoTextController.value.length >= 1 && this.infoFileController.valid && this.validFileFormatt(this.infoImageToUpload)) {
      this.infoError = false;
      return true;
    } else {
      this.infoError = true;
      return false;
    }
  }

}
