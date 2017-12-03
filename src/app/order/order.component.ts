import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from 'app/order/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model'


@Component({
  selector: 'mt-order-container',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de débito', value: 'DEB'},
    {label: 'Cartão refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService, 
              private router: Router) { }
 
  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    debugger;
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: any){
    order.items = this.cartItems()
        .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
      this.orderService.checkOrder(order)
        .subscribe((orderId: string) => {
          this.router.navigate(['/order-summary'])
          console.log(`Compra concluída: ${orderId.toString()}`)
          this.orderService.clear()
        })
    console.log(order)

  }
}
