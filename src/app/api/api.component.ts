import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { FoodData } from '../../assets/model';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  formValue!: FormGroup;
  modelObj: FoodData = new FoodData;
  allData: FoodData[] = [];
  

  //food!: Food;
  //cart!: Cart;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      id: [''],
      itemname: [''],
      itemprice: [''],
      foodtype: [''],
      image: [''],
      description: [''],
      rating: ['']
    })
    this.getData();
  }
  title = 'food api';

  //addToCart(food:Food) {
  //  this.cartService.addToCart(this.food);
  //  this.router.navigateByUrl('/cart-page');
  //}

  //removeFromCart(cartItem: CartItem) {
  //  this.cartService.removeFromCart(cartItem.food.id);
  //  this.setCart();
  //}

  //changeQuantity(cartItem: CartItem, quantityInString: string) {
  //  const quantity = parseInt(quantityInString);
  //  this.cartService.changeQuantity(cartItem.food.id, quantity);
  //  this.setCart();
  //}

  //setCart() {
  //  this.cart = this.cartService.getCart();
  //}


  addFood() {
    this.modelObj.id = this.formValue.value.id;
    this.modelObj.itemname = this.formValue.value.itemname;
    this.modelObj.itemprice = this.formValue.value.itemprice;
    this.modelObj.foodtype = this.formValue.value.foodtype;
    this.modelObj.image = this.formValue.value.image;
    this.modelObj.description = this.formValue.value.description;
    this.modelObj.rating = this.formValue.value.rating;

    this.api.postData(this.modelObj).subscribe({
      complete: () => {
        console.log('Posted...');
        this.formValue.reset();
        this.getData();
      }
    }
    )
  }

  getData() {
    this.api.getData().subscribe((res: any) => {
      this.allData = res.filter((x: any) => {
        return x.id > 0;
      });
    }
    )
  }

  deleteData(data: any) {
    this.api.deleteData(data.id).subscribe(() => {
      this.getData();
      alert('Data Deleted...');
    }
    )
  }

  editData(data: any) {
    this.modelObj.id = data.id;
    this.formValue.controls["id"].setValue(data.id);
    this.formValue.controls["itemname"].setValue(data.itemname);
    this.formValue.controls["itemprice"].setValue(data.itemprice);
    this.formValue.controls["foodtype"].setValue(data.foodtype);
    this.formValue.controls["image"].setValue(data.image);
    this.formValue.controls["description"].setValue(data.description);
    this.formValue.controls["rating"].setValue(data.rating);
  }

  updateData() {
    alert('before form values Updating');
    this.modelObj.id = this.formValue.value.id;
    this.modelObj.itemname = this.formValue.value.itemname;
    this.modelObj.itemprice = this.formValue.value.itemprice;
    this.modelObj.foodtype = this.formValue.value.foodtype;
    this.modelObj.image = this.formValue.value.image;
    this.modelObj.description = this.formValue.value.description;
    this.modelObj.rating = this.formValue.value.rating;
    alert('after form values Updating');
    this.api.updateData(this.modelObj, this.modelObj.id).subscribe({
      complete: () => {
        console.log('Updated...');
        this.formValue.reset();
        this.getData();
      },
      error: () => {
        alert('Error');
      }
    }
    )
  }
}
