import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/Product";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  inventory: number[] = [1,2,3,4,5,6,7,8,9,10];
  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: "",
      quantity: 1
    };
  }

  ngOnInit(): void {}

  quantityChange(e: any) {
    this.quantity = e.target.value;
}

  addToCart(): void {
    this.product.quantity = Number(this.quantity);    
    this.cartService.addToCart(this.product);
    alert(`${this.product.quantity} x ${this.product.name} was added to your cart`);
  }

}