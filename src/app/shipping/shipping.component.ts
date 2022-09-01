////import { Component, OnInit } from '@angular/core';
//////import { CartService } from '../cart.service';
////import { ToastrService } from 'ngx-toastr';
////import { CartService } from '../services/cart/cart.service';


////@Component({
////  selector: 'app-shipping',
////  templateUrl: './shipping.component.html',
////  styleUrls: ['./shipping.component.css']
////})
////export class ShippingComponent implements OnInit {

////  shippingCosts = this.cartService.getShippingPrices();
////  radioSelected = '2-Day 9.99';
////  shipValue: string = '';

////  constructor(private cartService: CartService,
////    private toastr: ToastrService,
////  ) {
////  }

////  ngOnInit(): void {
////  }

////  selected() {
////    this.cartService.cartValue += parseFloat(this.radioSelected.split(' ')[1]);
////    this.toastr.success(this.radioSelected, 'Shipping Selected');
////  }
////}




////// https://stackoverflow.com/questions/65821760/how-to-set-default-checked-value-for-radiobutton-in-angular-using-ngfor
