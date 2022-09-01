import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { FoodData } from '../../assets/model';



@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  allData: FoodData[] = [];
  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router, private toastr: ToastrService,
private api: ApiService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.food = foodService.getFoodById(params.id);
    })

  }

  ngOnInit(): void{
   
   /* for (var i = 0; i < this.allData.length; i++) {

      console.log(this.allData[i]);
    }*/
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
    this.toastr.success('Item added to cart !');
  }
  shipping() {
    this.toastr.success('Order is placed successfully!')
  }
}
