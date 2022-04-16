import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {

  constructor(private service:SharedService,private router:Router) { }

  ngOnInit() {
  }
  couponAdd(){
    this.service.coupon =!this.service.coupon;
    this.router.navigate(["/order-list"])
    console.log(this.service.coupon);
  }
  back(){
    this.router.navigate(["/order-list"])
  }
}
