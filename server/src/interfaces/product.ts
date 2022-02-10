import { ObjectId, Document } from "mongoose";

export interface Product {
  ID: string | number | ObjectId | null;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  discount: number;
}

export interface ProductDocument extends Product, Document { }

// { 
//   "ID": null, 
//   "name": "Sol y Lluvia",
//   "image": "https://raw.githubusercontent.com/elPoeta/asset-store/main/mateShop/generic-yerba-package.svg", 
//   "description": "Color verde con reflejos amarillos. Molienda uniforme, hojas medianas, pequeñas, palos y polvo.", 
//   "brand": "Sol y Lluvia", 
//   "category": "Barbacua", 
//   "price": 800, 
//   "countInStock": 100, 
//   "rating": 0, 
//   "numReviews": 0, 
//   "discount":0 
      
//   }