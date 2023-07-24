import { Image } from "./image"

export interface Product {
    name: string
    shortDescription: string
    id: string
    images: Image[]
    category: {
        _id: string
        name: string
    }
}