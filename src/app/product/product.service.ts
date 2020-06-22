import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
    cartData: { productName: string, imgUrl: string, price: number, quantity: number }[] = [];

    cartSummary = {
        totalItems: 0,
        totalItemsPrice: 0,
        totalPrice: 0,
        deliveryCharges: 0,
    };

    confirmOrder = false;

}