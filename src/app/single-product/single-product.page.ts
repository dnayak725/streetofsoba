import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  allResponse: any;
  itemData: any = [];
  singleProduct: any = [];
  selectedSingleItem: any = [];
  constructor(
    public service: SharedService,
    private router: Router,
    private modalController: ModalController,
    private localstore: LocalStorageService
  ) {}

  ngOnInit() {
    this.service.getApiResponcse().subscribe((res) => {
      this.allResponse = res;
      this.itemData = this.allResponse.data;
      this.itemData.forEach((element) => {
        element.items.forEach((element2) => {
          if (element2.category_id == 4) {
            this.singleProduct.push(element2);
          }
        });
      });
      // active tab product
      let checkItem = false;
      this.singleProduct.forEach((el) => {
        this.service.singleItemCart.forEach((el2) => {
          if (el == el2.item) {
            checkItem = true;
            
          }
        });
        if (checkItem == false) {
          this.service.singleItemCart.push({
            quantity: 1,
            item: el,
            cart: false,
          });
        } else {
          checkItem = false;
        }
      });
    });
  }
  async closesingleModel() {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
    this.router.navigate(['/products', { index: this.service.itemIndex }]);
  }
  selectSingleItem(data: any) {
    if (this.service.containsObject(data, this.selectedSingleItem) == false) {
      this.selectedSingleItem.push(data);
    } else {
      for (let i = 0; i < this.selectedSingleItem.length; i++) {
        if (this.selectedSingleItem[i] == data) {
          const index1 = this.selectedSingleItem.indexOf(
            this.selectedSingleItem[i]
          );
          if (index1 > -1) {
            this.selectedSingleItem.splice(index1, 1);
          }
        }
      }
    }
  }

  singleProductCart() {
    this.service.singleItemCart.forEach((element) => {
      this.selectedSingleItem.forEach((element2) => {
        if (element.item == element2) {
          element.cart = true;
        }
      });
    });
    // for reset selectedItem if not in the cart and itemCart
    this.closesingleModel();
    this.service.itemCart = [];
    this.service.selectedItem = [];
    this.router.navigate(['/products', { index: this.service.itemIndex }]);
    // console.log(this.service.itemCartFinal);
  }
  cancelSingleItem() {
    this.closesingleModel();
    this.service.itemCart = [];
    this.service.selectedItem = [];
    this.router.navigate(['/products', { index: this.service.itemIndex }]);
  }
}