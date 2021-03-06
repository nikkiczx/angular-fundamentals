import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { CartSuccessComponent } from "./components/cart-success/cart-success.component";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "product/:id", component: ProductItemDetailComponent },
  { path: "cart", component: CartComponent },
  { path: "cart/success", component: CartSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
