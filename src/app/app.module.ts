import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    NavBarComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
