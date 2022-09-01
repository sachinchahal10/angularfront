import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart, Cart01 } from '../shared/models/Cart';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../shared/models/CartItem';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  cart1!: Cart01;
  constructor(private cartService: CartService, private toastr: ToastrService, private router: Router) {
    this.setCart();
    
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
    this.toastr.warning('Item removed from cart !');
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
    this.cart1 = this.cartService.getcart();
  }

  shipping() {
    this.toastr.success('Order is placed successfully!')
    this.setCart();
    
  }

  //btnClick = function () {
  //  this.router.navigateByUrl('/payment');
  //}

  btnClick() {
    this.router.navigateByUrl('/payment');// navigate to other page
    
  }
}
