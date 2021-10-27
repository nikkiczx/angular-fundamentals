import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderList: Order[] = [];
  
  constructor() { }

  getOrder() {
    return this.orderList;
  }

  saveOrder(order: Order): void {
    this.orderList.push(order);
  }
}
