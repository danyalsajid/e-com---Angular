import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';
import * as firebase from 'firebase';

import { CategoryData } from '../shared/models/categoryData';

@Injectable({ providedIn: 'root' })
export class AdminService {

    private dbAddress: string = "https://e-godham.firebaseio.com/";
    firebaseStorage: any;
    storageRef: any;
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
 
        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = this.storageRef.child('images/' + file.name).put(file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                console.log(error);
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                });
            });


    }

}