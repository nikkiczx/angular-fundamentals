import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  name: string = '';
  address: string = '';
  ccnumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
