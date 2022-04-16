import { Router } from '@angular/router';
import { SharedService } from './../shared.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { KeyedRead } from '@angular/compiler';
@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.page.html',
  styleUrls: ['./single-item.page.scss'],
})
export class SingleItemPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private localstore: LocalStorageService,
    public service: SharedService,
    private router: Router
  ) {}
  @Input() productId: any;
  singleProduct: any = [];
  ngOnInit() {
    this.singleDetails();
  }
  // single product get from service
  singleDetails() {
    let checkItem = false;
    this.service.productDetails = [];
    this.service.products.forEach((element) => {
      if (element.id == this.productId) {
        this.singleProduct.push(element);
        this.service.singleItemCart.forEach((element2) => {
          if (element == element2.item) {
            checkItem = true;
          }
        });
        if (checkItem == false) {
          this.service.singleItemCart.push({
            quantity: 1,
            item: element,
            cart: false,
          });
        }
        // if item is not added and only increment the quantity it will reset the quantity
        this.service.singleItemCart.forEach((e) => {
          if (e.cart == false) {
            e.quantity = 1;
          }
        });
      }
    });
  }

  // add to cart to single product
  singleProductCart(singleProduct: any) {
    this.service.singleItemCart.forEach((element) => {
      if (singleProduct[0] == element.item) {
        element.cart = true;
      }
    });
    this.closeSingleItemModel();
    // this.localstore.store("singleCart", this.service.singleItemCart)
  }
  // single item quantity

  increament(item: any) {
    this.service.singleItemCart.forEach((element) => {
      if (item == element.item) {
        element.quantity = element.quantity + 1;
      }
    });
  }

  decreament(item: any) {
    this.service.singleItemCart.forEach((element) => {
      if (item == element.item) {
        if (element.quantity != 1) {
          element.quantity = element.quantity - 1;
        }
      }
    });
  }
  mainhead() {
    console.log(this.service.singleItemCart);
  }
  async closeSingleItemModel() {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }
}
