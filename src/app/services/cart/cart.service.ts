import { Injectable } from '@angular/core';
import { Cart, Cart01 } from 'src/app/shared/models/Cart';
import { CartItem, Cartitem01 } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';
import { FoodData } from '../../../../dist/foodmine-course/assets/model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cart1: Cart01 = new Cart01();
  private cart02 : Cart = new Cart();
  fooddata11: FoodData[] = [];


  addToCart(food: Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  addtocart(food: FoodData): void {
    let cartitem01 = this.cart.items.find(item => item.food.id === food.id);
    if (cartitem01) {
      this.changeQuantity(food.id, cartitem01.quantity + 1);
      return;
    }
    this.cart1.items.push(new Cartitem01(food));
  }
  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }

  getCart02():Cart{
    return this.cart02;
  }

  getcart(): Cart01 {
    return this.cart1;
  }
  clearcart(){
    this.cart02.items = this.cart.items;
    this.cart.items = [];
  } 
  addtocart11(fooddata: FoodData): boolean {
    let foods = this.fooddata11.find(p => p.id === fooddata.id);
    if (!foods) {
      this.fooddata11.push(fooddata);
      return true;
    }
    else {
      return false;
    }
    this.cart1.items.push(new Cartitem01(fooddata));
  }
}
