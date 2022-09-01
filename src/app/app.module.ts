import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {RatingModule} from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
//import { ShippingComponent } from './shipping/shipping.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodapiDetailComponent } from './foodapi-detail/foodapi-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { AdminSignupComponent } from './adminsignup/adminsignup.component';
import { PaymentComponent } from './payment/payment.component';
import { GooglePayButtonComponent, GooglePayButtonModule } from '@google-pay/button-angular';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    StartComponent,
    ApiComponent,
    FoodapiDetailComponent,
    LoginComponent,
    SignupComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    PaymentComponent,
    OrderhistoryComponent,
    //ShippingComponent GooglePayButtonModule  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GooglePayButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
