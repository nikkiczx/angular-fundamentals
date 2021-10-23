import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { CartService } from "src/app/services/cart.service";
import { Product } from "../../models/Product";

@Component({
  selector: "app-product-item-detail",
  templateUrl: "./product-item-detail.component.html",
  styleUrls: ["./product-item-detail.component.css"]
})
export class ProductItemDetailComponent implements OnInit {
  productItem: Product = {
    id: 0,
    name: "",
    price: 0,
    url: "",
    description: "",
    quantity: 1
  };
  id: number = 0;
  inventory: number[] = [1,2,3,4,5,6,7,8,9,10];
  quantity: number = 1;

  constructor(
    private productService: ProductsService,
    private activeRouter: ActivatedRoute,
    private cartService: CartService
  ) {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get("id"));
    });
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((product) => {  
      this.productItem = product.find(p => p.id === this.id) as unknown as Product;      
    });
  }

  quantityChange(e: any) {
    this.quantity = e.target.value;
  }

  addToCart(): void {
    this.productItem.quantity = Number(this.quantity);    
    this.cartService.addToCart(this.productItem);
    alert(`${this.productItem.quantity} x ${this.productItem.name} was added to your cart`);
  }
}
