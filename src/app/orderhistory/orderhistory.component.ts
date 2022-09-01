import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart, Cart01 } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  cart!: Cart;
  cart1!: Cart01;
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart02();
    this.cart1 = this.cartService.getcart();
    console.log(this.cart.items.length);
  }

  ngOnInit(): void {
    
  }
}
