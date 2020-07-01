import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';
import * as firebase from 'firebase';

import { CategoryData } from '../shared/models/categoryData';
import { Subject } from 'rxjs';
import { ProductData } from '../shared/models/productData';

@Injectable({ providedIn: 'root' })
export class AdminService {

    private dbAddress: string = "https://e-godham.firebaseio.com/";
    firebaseStorage: any;
    storageRef: any;
    downloadURLSubject = new Subject<string>();

    constructor(private http: HttpClient, private authService: AuthService) {
        this.firebaseStorage = firebase.storage();
        this.storageRef = this.firebaseStorage.ref();
    }

    storeCategory(categoryData: CategoryData) {
        const node = 'categoryData'
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            const endpoint = this.dbAddress + node + '.json?auth=' + user.token;

            return this.http.post(endpoint, categoryData);
        }));
    }

    fetchCategory() {
        const node = 'categoryData'
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            const endpoint = this.dbAddress + node + '.json?auth=' + user.token;

            return this.http.get(endpoint);
        }));
    }

    uploadImage(file: File) {
        let uploadTask = this.storageRef.child('images/' + file.name).put(file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, error => {
                console.log(error);
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    this.downloadURLSubject.next(downloadURL)
                });
            });
    }

    storeProduct(productData: ProductData) {
        const node = 'productData'
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            const endpoint = this.dbAddress + node + '.json?auth=' + user.token;

            return this.http.post(endpoint, productData);
        }));
    }
}