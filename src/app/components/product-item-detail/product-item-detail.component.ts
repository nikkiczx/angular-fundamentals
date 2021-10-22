import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductsService } from "../../services/products.service";
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

  constructor(
    private productService: ProductsService,
    private activeRouter: ActivatedRoute
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
}
