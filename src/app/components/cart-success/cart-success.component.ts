import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-cart-success',
  templateUrl: './cart-success.component.html',
  styleUrls: ['./cart-success.component.css']
})
export class CartSuccessComponent implements OnInit {
  orderList: Order[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderList = this.orderService.getOrder();    
  }

}
