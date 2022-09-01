import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { AdminSignupComponent } from './adminsignup/adminsignup.component';
import { ApiComponent } from './api/api.component';
import { CartPageComponent } from './cart-page/cart-page.component';

import { FoodPageComponent } from './food-page/food-page.component';
import { FoodapiDetailComponent } from './foodapi-detail/foodapi-detail.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';
import { GooglePayButtonComponent, GooglePayButtonModule } from '@google-pay/button-angular';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'start', component: StartComponent },
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  { path: 'cart-page', component: CartPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'api', component: ApiComponent },
  { path: 'foodapi/:id', component: FoodapiDetailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'api', component: LoginComponent },
  { path: 'adminsignup', component: AdminSignupComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'api/orderhistory', component: OrderhistoryComponent },
  { path: 'food/:id/home', component: HomeComponent },
  { path: 'cart-page/home', component: HomeComponent },
  { path: 'api/orderhistory/api', component: ApiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

