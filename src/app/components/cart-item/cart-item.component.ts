import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/Product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart: Product;
  itemQuantity: number = 0;

  constructor(private cartService: CartService) {
    this.cart = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: "",
      quantity: 1
    };
  }

  ngOnInit(): void {}

  changeQuantity(itemQuantity: number) {
    this.cartService.updateQuantity(itemQuantity, this.cart.id);
  }

}