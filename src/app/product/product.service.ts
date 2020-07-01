import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
    
    // cart
    cartData: { productName: string, imgUrl: string, price: number, quantity: number }[] = [];
    cartSummary = {
        totalItems: 0,
        totalItemsPrice: 0,
        totalPrice: 0,
        deliveryCharges: 0,
    };
    confirmOrder = false;

    private dbAddress: string = "https://e-godham.firebaseio.com/";
    constructor(private http: HttpClient, private authService: AuthService) {}

    fetchProductData() {
        const node = 'productData'
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            const endpoint = this.dbAddress + node + '.json?auth=' + user.token;

            return this.http.get(endpoint);
        }));
    }

}