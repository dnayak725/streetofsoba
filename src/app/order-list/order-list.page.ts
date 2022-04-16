import { element } from 'protractor';
import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
 a = 1
 singleItemTrue:any=[];
 filterSingleItem:any=[];
 filterMainItem:any=[];
 BothItems:any=[];
 finalArray:any=[];
 postRequestData: any = {};
 sumdata:any;
  constructor(
    private localstore: LocalStorageService,
    public service: SharedService,
    private route: Router,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    // console.log(this.service.itemCartFinal)
    // // if (this.service.singleItemCart.length == 0) {
    // //   this.route.navigate(['/home']);
    // // }
   
    // console.log(this.service.itemCartFinal)
    // console.log(this.service.singleItemCart)
  }
  get itemCart(): any {
    for(let i = 0 ; i<this.service.itemCartFinal.length; i ++){
      this.service.itemCartFinal[i]['additional_price'] = 0
      for(let j = 0; j<this.service.products.length; j++){
        if(this.service.itemCartFinal[i]['item_id'] == this.service.products[j]['id']){
          this.service.itemCartFinal[i]['base_price'] = this.service.products[j]['basic_price']
          this.service.itemCartFinal[i]['item_name'] = this.service.products[j]['item_name']
          this.service.itemCartFinal[i]['image'] = this.service.products[j]['image']
        }
      }
      for(let k=0; k < this.service.itemCartFinal[i]['options'].length;k++){
        this.service.itemCartFinal[i]['additional_price'] = (this.service.itemCartFinal[i]['additional_price'] + this.service.itemCartFinal[i]['options'][k]['additional_price'])
      }
    }
    // console.log(this.service.itemCartFinal)
    return this.service.itemCartFinal;
    
  }

  singleCartIncrement(item) {
    this.service.singleItemCart.forEach((element) => {
      if (item == element.item) {
        element.quantity = element.quantity + 1;
      }
    });
  }

  singleCartDecrement(item) {
    this.service.singleItemCart.forEach((element) => {
      if (item == element.item) {
        if (element.quantity != 1) {
          element.quantity = element.quantity - 1;
        }
      }
    });
  }

  deleteSingleItem(item: any) {
    this.service.singleItemCart.forEach((element) => {
      if (item == element.item) {
        element.cart = false;
        element.quantity = 1;
      }
    });
  }
// For calculate total price
  get totalValue(): any {
    let singleItemtotal = 0;
    let multiplItemtotal = 0;
    this.service.itemCartFinal.forEach(element => {
      if(this.service.coupon==true && element.quantity>=2 )
      {
      multiplItemtotal +=  (element.quantity * (element.base_price + element.additional_price))-(element.base_price + element.additional_price) * Math.floor((element.quantity/2))
      // console.log(multiplItemtotal)
      // console.log((element.quantity * (element.base_price + element.additional_price)))
    
      console.log((element.base_price + element.additional_price) * Math.floor((element.quantity/2)))
      console.log(element.quantity/2)
      console.log(Math.floor((element.quantity/2)))

    }
      else{
        multiplItemtotal +=  element.quantity * (element.base_price + element.additional_price)}
     
    });
    this.service.singleItemCart.forEach((element) => {
      if (element.cart == true) {
        singleItemtotal =
          singleItemtotal + element.quantity * element.item.basic_price;
      }
    });
    return singleItemtotal + multiplItemtotal;
  }

  orderListBack() {
    if(this.service.coupon == true){
      this.service.coupon = false;
    }
    this.route.navigate(['/products', { index: this.service.itemIndex }]);
  }
  removeCart(item:any){
    for (let i = 0; i < this.service.itemCartFinal.length; i++) {
      if (this.service.itemCartFinal[i] == item) {
        const index1 = this.service.itemCartFinal.indexOf(
          this.service.itemCartFinal[i]
        );
        if (index1 > -1) {
          this.service.itemCartFinal.splice(index1, 1);
        }
      }
    }
  }
  cartQuantity(index:any,operator:any){
    if(this.service.coupon == true){
      this.service.coupon = false;
    }
    if(operator == '+'){
      this.service.itemCartFinal[index]['quantity'] += 1
    }else{
      if(this.service.itemCartFinal[index]['quantity'] != 1){
        this.service.itemCartFinal[index]['quantity'] -= 1
      }
    }
  }

  editItem(index:any){
    if(this.service.coupon == true){
      this.service.coupon = false;
    }
    this.route.navigate(['/update',{id:index}])
  }
  checkout(){
    this.service.singleItemCart.forEach(element => {
      if(element.cart == true){
       this.singleItemTrue.push(element)
      }
      
    });
    this.singleItemTrue.forEach(element2 => {
      element2.item['quantity'] =element2.quantity;
    });
    this.singleItemTrue.forEach(element2 => {
      this.filterSingleItem.push(element2.item)
    });

    this.itemCart.forEach(element3 => {
      let obj ={"id":element3.item_id,"basic_price":element3.base_price,"image":element3.image,"quantity":element3.quantity,
      "options":element3.options,"item_name":element3.item_name}
      this.filterMainItem.push(obj)
      
    });
 

    this.BothItems = this.filterMainItem.concat(this.filterSingleItem)
  
   this.finalArray = { items: this.BothItems, dining_title: this.service.dinigLocation, is_promo_applied: this.service.coupon};
  
   console.log("nayak")
console.log(this.finalArray)
this.service.postData(this.finalArray).subscribe((data) => {
  this.postRequestData = data;
  console.log(data)

  if (this.postRequestData.status == 'success') {
    const options: InAppBrowserOptions = {
      location: 'no',//Or 'no'
      hidden: 'no', //Or  'yes'
      zoom: 'yes',//Android only ,shows browser zoom controls
      hideurlbar: 'yes',//Or 'no'
    };
    const browser = this.iab.create(
      'http://poke-theory.quocent.com/receipt/' + data['data'], 'blank', options
    );
    browser.on('loadstop').subscribe(event => {
      setTimeout(() => {
        browser.close();
        this.route.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
      }, 5000);
    });
    browser.on('exit').subscribe(event => {
      browser.close();
    })

  }
});
  }

  coupon(){
    this.route.navigate(['/coupon'])
  }
  test(){
     console.log(this.service.itemCartFinal)
  }
 
  sum(x){
    this.sumdata = Math.floor(x/2);
  }
}
