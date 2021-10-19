import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../models/Product";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() details = new EventEmitter();

  constructor() {
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
}
