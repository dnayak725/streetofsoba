import { SharedService } from './../shared.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';



@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.page.html',
  styleUrls: ['./order-success.page.scss'],
})
export class OrderSuccessPage implements OnInit {
  date: any;
  constructor(private localstore: LocalStorageService, public printer: Printer,private router:Router,public service:SharedService) { }

  ngOnInit() {
    console.log(this.service.itemCartFinal)
    console.log(this.service.singleItemCart)

   setTimeout(() => {
    this.router.navigate(['/home']). then(() => {
      window. location. reload();
      });;
}, 80000);
this.date = new Date();
this.print();
  }
  // For calculate total price
  get totalValue(): any {
    let singleItemtotal = 0;
    let multiplItemtotal = 0;
    this.service.itemCartFinal.forEach(element => {
      multiplItemtotal +=  element.quantity * (element.base_price + element.additional_price)
    });
    this.service.singleItemCart.forEach((element) => {
      if (element.cart == true) {
        singleItemtotal =
          singleItemtotal + element.quantity * element.item.basic_price;
      }
    });
    return singleItemtotal + multiplItemtotal;
  }
  print() {
    this.printer.isAvailable().then((onSuccess: any) => {
      let content = document.getElementById('printer').innerHTML;
      let options: PrintOptions = {
        name: 'MyDocument',
        duplex: true,
        orientation: "portrait",
        monochrome: true
      };
      this.printer.print(content, options).then((value: any) => {
        console.log('value:', value);
      }, (error) => {
        console.log('eror:', error);
      });
    }, (err) => {
      console.log('err:', err);
    });
  }
}
