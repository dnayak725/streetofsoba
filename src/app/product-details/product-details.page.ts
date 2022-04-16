import { element } from 'protractor';
import { SingleProductPage } from './../single-product/single-product.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseModalPage } from '../base-modal/base-modal.page';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  dataReturned: any;
  productId: any;
  filterOptions: any = [];
  optionId: any;
  itemId: any;
  clickVariable: any;
  slecteArrayLength: any = [];
  optionName: any = [];
  flag:any = false;
  separation:any = false;
  separation2:any = false;
  

  constructor(
    public modalController: ModalController,
    public service: SharedService,
    private route: Router,
    private localstore: LocalStorageService,
    private activeroute: ActivatedRoute
  ) {}

  ngOnInit() {
   
    
    

    //  this.openModal();
    // get product id throute route params
    this.activeroute.params.subscribe((params) => {
      this.productId = params['productId'];
    });
    this.productDetails();
    // Create default quantity
    let itemExist = false;
    for (let i = 0; i < this.service.itemCart.length; i++) {
      if (this.service.itemCart[i]['item_id'] == this.productId) {
        itemExist = true;
      }
    }
    if (itemExist == false) {
      this.service.itemCart.push({
        item_id: this.productId,
        quantity: 1,
        cart: false,
        options: [],
      });
    } else {
      itemExist = false;
    }
    // for reset selectedItem if not in the cart
    this.service.selectedItem = [];
  }

  // open base modal popup
  async openModal() {
    const modal = await this.modalController.create({
      component: BaseModalPage,
      componentProps: {
        optionId: this.optionId,
        itemId: this.itemId,
      },
      backdropDismiss: false,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  async opensingleModal() {
    const modal = await this.modalController.create({
      component: SingleProductPage,
      componentProps: {},
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  // show product and product options in product details page
  productDetails() {
    this.service.productDetails = [];
    this.service.products.forEach((element) => {
      if (element.id == this.productId) {
        this.service.productDetails.push(element);
      }
    });
    this.service.productOption = this.service.productDetails[0].options;

    this.filterOptions = this.service.productOption.reduce(
      (accumalator, current) => {
        if (
          !accumalator.some(
            (item) => item.variable_name === current.variable_name
          )
        ) {
          accumalator.push(current);
        }
        return accumalator;
      },
      []
    );
    this.service.filterOptions = this.filterOptions;
    this.openOptionModal(this.filterOptions[2].id, this.filterOptions[2].item_id, this.filterOptions[2].is_mandatory);

if(this.filterOptions.length >= 2){
  this.openOptionModal(this.filterOptions[1].id, this.filterOptions[1].item_id, this.filterOptions[1].is_mandatory);
}
 
    this.openOptionModal(this.filterOptions[0].id, this.filterOptions[0].item_id, this.filterOptions[0].is_mandatory);
    console.log(this.filterOptions[3])
  }

  // open base modal with option data of items
  openOptionModal(optionId: any, itemId: any, mandatory: any) {
    if (mandatory != 1) {
      this.optionId = optionId;
      this.itemId = itemId;
      this.openModal();
    }
  }
  addToCart() {
    this.service.itemCart.forEach((element) => {
      if (element.item_id == this.productId) {
        this.service.selectedItem.forEach((element2) => {
          if (element2.item_id == element.item_id) {
            element.options.push(element2);
          }
        });
        element.cart = true;
      }
    });
    this.service.itemCart.forEach((element) => {
      if (element.cart == true) {
        this.service.itemCartFinal.push(element);
      }
    });
    if (this.service.addtionalPopup == true) {
      this.opensingleModal();
      this.service.addtionalPopup = false;
    } else {
      // for reset selectedItem if not in the cart and itemCart
      this.service.itemCart = [];
      this.service.selectedItem = [];
      this.route.navigate(['/products', { index: this.service.itemIndex }]);
    
    }
   
  }
  cartQuantity(operator: any) {
    this.service.itemCart.forEach((element) => {
      if (element.item_id == this.productId) {
        if (operator == '+') {
          element.quantity = element.quantity + 1;
        } else {
          if (element.quantity != 1) {
            element.quantity = element.quantity - 1;
          }
        }
      }
    });
  }
  backToProduct() {
    // for reset selectedItem if not in the cart and itemCart
    this.service.itemCart = [];
    this.service.selectedItem = [];
    this.route.navigate(['/products', { index: this.service.itemIndex }]);
  }
  // auto open poup
  // popupAutoOpen(popup1:any,popup2:any){
  //   {
  //     this.optionId = optionId;
  //     this.itemId = itemId;
  //     this.openModal();
  //   }
  // }
  // For calculat selected index
  // get ItemSelected():any{
  //   let x = []
  //   this.filterOptions.forEach(element => {
  //     this.service.selectedItem.forEach(element2 => {
  //       if(element2.variable_name == element.variable_name && element2.item_id == element.item_id){
  //         x.push(element2.option_name)
  //       }
  //     });
  //   });
  //   console.log(x)
  //   return
  // }

  

  // get countSelect(): any {
  //   this.optionsData =this.localstore.retrieve("finaloptiondata")
  //   let c = 0;
  //   if(this.optionsData != null){
      
  //   this.optionsData.forEach((modalvalue) => {
  //     if (this.service.selectedItem) {
  //       this.service.selectedItem.forEach((z) => {
  //         if (z.id == modalvalue.id) {
  //           c += 1;
  //         }
  //       });
  //     }
  //   });}
  //   console.log(c);
  //   return c;
  // }
  changeflag(data:any){
    this.flag = data;
  }
 x(res:any){
this.separation = res
 }
 y(res2:any){
  this.separation2 = res2
   }
   headmain(){
     console.log(this.service.selectedItem)
   }
}
