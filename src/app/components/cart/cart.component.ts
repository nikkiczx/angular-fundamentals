import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { Product } from "../../models/Product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];  
  totalSum: number = 0;
  itemQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getTotal();
  }

  getTotal() {
    if (this.cartList.length > 0) {
      for (let i = 0; i < this.cartList.length; i++) {
        this.totalSum += (this.cartList[i].price * this.cartList[i].quantity);
      }      
    }
    return this.totalSum;  
  }
}
