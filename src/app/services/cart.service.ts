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
    let index: number = this.cartList.findIndex(
      (c) => (c.id === product.id)
    )
    if (index >= 0) {
      let currQuantity: number = this.cartList[index].quantity;
      let newQuantity: number = product.quantity + currQuantity;
      this.updateQuantity(newQuantity, product.id);
    } else {
      this.cartList.push(product);
    }    
    return this.cartList;
  }

  removeFromCart(index: number): void {
    this.cartList.splice(index, 1);    
  }

  updateQuantity(newQuantity: number, itemID: number): void {
    let index: number = this.cartList.findIndex(
      (c) => (c.id === itemID)
    );

    if (newQuantity === 0) {
      this.removeFromCart(index);
    } else {
      this.cartList[index].quantity = newQuantity;
    }    
  }

  calcCartTotal() {
    let totalSum = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      totalSum += (this.cartList[i].price * this.cartList[i].quantity);
    }
    return totalSum; 
  }
}
