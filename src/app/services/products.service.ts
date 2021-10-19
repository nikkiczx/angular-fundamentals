import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private productJson: string = "./assets/data.json";
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productJson);
  }

  returnProduct(): Product[] {
    this.getAllProducts().subscribe(product => {
      this.products = product;
    });

    return this.products;
  }

  getOneProduct(id: number): Product | undefined {
    this.returnProduct();
    return this.products!.find(p => p.id === id);
  }
}
