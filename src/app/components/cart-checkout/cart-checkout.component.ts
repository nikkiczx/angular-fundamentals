import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent implements OnInit {
  @Input() totalSum: number;
  name: string = '';
  address: string = '';
  ccnumber: string = '';
  order: Order;

  constructor(private orderService: OrderService, private router: Router) { 
    this.order = {
      name: "",
      price: 0
    },
    this.totalSum = 0
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.order.name = this.name;
    this.order.price = this.totalSum;
    this.orderService.saveOrder(this.order);
    this.router.navigate(['cart/success'])
  }

}
