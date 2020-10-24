import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HomeService {

    private dbAddress: string = "https://e-godham.firebaseio.com/";
    constructor(private http: HttpClient, private authService: AuthService) { }

    // fetchCategory() {
    //     const node = 'categoryData'
    //     return this.authService.user.pipe(take(1), exhaustMap(user => {
    //         const endpoint = this.dbAddress + node + '.json?auth=' + user.token;
    //         return this.http.get(endpoint);
    //     }));
    // }


    fetchCategory() {
        const node = 'categoryData'
        // return this.authService.user.pipe(take(1), exhaustMap(user => {
            const endpoint = this.dbAddress + node + '.json';
            return this.http.get(endpoint);
        // }));
    }

}