import { CartItem, Cartitem01 } from "./CartItem";

export class Cart{
    items:CartItem[] = [];

    get totalPrice(): number{
      let totalPrice = 0;
      let shipping = 20;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

      return totalPrice + shipping;
    }
}
export class Cart01 {
  items: Cartitem01[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    let shipping = 20;
    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice + shipping;
  }
}
