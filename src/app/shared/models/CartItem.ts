import { FoodData } from "../../../assets/model";
import { Food } from "./Food";

export class CartItem{
    constructor(food:Food){
      this.food = food;  
    }
    food:Food;
    quantity:number = 1;

    get price():number{
        return this.food.price * this.quantity;
    }
}

export class Cartitem01 {
  constructor(food01: FoodData) {
    this.food01 = food01;
  }
  food01: FoodData;
  quantity: number = 1;

  get price(): number {
    return this.food01.itemprice * this.quantity;
  }
}
