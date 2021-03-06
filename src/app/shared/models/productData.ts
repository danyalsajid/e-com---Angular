export interface ProductData {
    category: string
    subCategory: string
    productName: string
    imgUrls: string[]
    productDescription: string
    productPrice: number
    perOff: string
    perOffValue: number
    inStock: string
    quantity: number
    dateAdded: string

    rating?: number
    reviews?:
    {
        reviewer: string
        date: string
        review: string,
    }[],
}