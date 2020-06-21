import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
    cartData = [
        {
            productName: "Product Name",
            imgUrl: "../../assets/electronics-banner-02.jpg",
            price: 200,
            quantity: 1,
        },
        {
            productName: "Product Name",
            imgUrl: "../../assets/electronics-banner-02.jpg",
            price: 100,
            quantity: 1,
        },
    ];

    cartSummary = {
        totalItems: 0,
        totalItemsPrice: 0,
        totalPrice: 0,
        deliveryCharges: 0,
    };

    confirmOrder = false;

}