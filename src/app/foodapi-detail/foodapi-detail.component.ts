import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { FoodData } from '../../assets/model';
import { ApiService } from '../api.service';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-foodapi-detail',
  templateUrl: './foodapi-detail.component.html',
  styleUrls: ['./foodapi-detail.component.css']
})
export class FoodapiDetailComponent implements OnInit {
  allData: FoodData[] = [];
  food!: FoodData;
  food01!: FoodData;
  constructor(
    private cartservice: CartService,
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router, private toastr: ToastrService,
    private api: ApiService) {
    //this.activatedRoute.params.subscribe((params) => {
    //  if (params.id)
    //    this.food = this.foodService.getfoodbyid(params.id);
    //});
}

  ngOnInit(): void {
   
  }


  //addToCart() {
  //  this.cartService.addToCart(this.food);
  //  this.router.navigateByUrl('/cart-page');
  //  this.toastr.success('Item added to cart !');
  //}
  shipping() {
    this.toastr.success('Order is placed successfully!')
  }

  addtocart11(foods: FoodData) {
    let added: boolean =
      this.cartservice.addtocart11(this.food01);
    this.router.navigateByUrl('/cart-page');
    console.log(this.food01);
    if (added) {
      this.toastr.success('Item added to cart !');
    }
  }

}
