export interface ProductData {
    name: string,
    category: string,
    percentOff: number,
    price: number,
    imgUrl: string,
    img2Url?: string,
    img3Url?: string,
    rating?: number,
    description?: string,
    reviews?: {
        reviewer: string,
        date: string,
        review: string,
    }[],
}