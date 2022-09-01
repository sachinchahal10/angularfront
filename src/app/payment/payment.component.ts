import { Component, OnInit } from '@angular/core';
//import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { CartService } from '../services/cart/cart.service';
import { User } from '../shared/models/user';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(private toastr: ToastrService, private api: ApiService, private cartService01 : CartService) { }
  user!: User;
  variable!:string;
  ngOnInit(): void {
  }
  title = 'googlepay';
  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = 250;
  buttonHight = 50;
  isTop = window === window.top;

  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedPaymentMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantI: "FoodishMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Foodish"
    },
    tracsactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLable: "Total",
      TotalPrice: "1000.00",
      currencyCode: "USD",
      countryCode: "US"
    }
  };
  onLoadPaymentData(event: any): void {
    console.log("Load Payment Data by Foddish", event.detail)
  }

  btnOrder() {
    this.toastr.success('Order is placed successfully!Our Deliver Boy Ramesh will reach out to you in 20 minutes.')
    this.cartService01.clearcart();
  }
//  loginbyid(id: number) {
//    const _this = this;
//      this.api.getlogin(id).pipe(map(c => {
//          (      item: { name: any; email: any; password: any; mobile: any; id: any; })=> {
//        const users:User =
//          { name: item.name, email: item.email, password: item.password, mobile: item.mobile, id: item.id }
//        return users;
//      }
//    })).subscribe(d=>d);
//  }
}


