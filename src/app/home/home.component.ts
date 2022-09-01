import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodData } from '../../assets/model';
import { ApiService } from '../api.service';
import { CartService } from '../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  allData: FoodData[] = [];
  food01!: FoodData;
  constructor(private foodService: FoodService,
    private router: Router, private toastr: ToastrService,
    private cartservice: CartService,
    private route: ActivatedRoute, private api: ApiService) {
    //route.params.subscribe((params) => {
    //  if (params.id)
    //   this.food01=foodService.getfoodbyid(params.id);
    //})
}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = this.foodService.getAll();
    })
    this.api.getData().subscribe((res: any) => {
      this.allData = res.filter((x: any) => {
        return x.id > 0;
      });
    }
    )
    console.log(this.allData.length);
  }

  addtocart() {
    this.cartservice.addtocart(this.food01);
    this.router.navigateByUrl('/cart-page');
    this.toastr.success('Item added to cart !');
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
