import { Injectable } from '@angular/core';
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: Product[] = [];

  constructor() { }

  getCart() {
    return this.cartList;
  }

  addToCart(product: Product) {
    this.cartList.push(product);
    return this.cartList;
  }
}
