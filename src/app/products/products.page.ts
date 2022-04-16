import { SingleItemPage } from './../single-item/single-item.page';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  segmentModel = this.service.itemIndex;
  dataReturned: any;
  allResponse: any;
  itemData: any;
  tabIndex = 0;
  productId: any;
  
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 2,
    speed: 400,
    loop: false,
    autoplay: {
      delay: 4000,
    },
  };
  constructor(
    public service: SharedService,
    private route: Router,
    private localstore: LocalStorageService,
    public modalController: ModalController,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit() {
  
      
    // get id from item page product function
    this.activateroute.params.subscribe((params) => {
      this.service.itemIndex = params['index'];
    });

    this.items();
 
 
  }
  // single item modal open
  async openModal() {
    const modal = await this.modalController.create({
      component: SingleItemPage,
      componentProps: {
        productId: this.productId,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  // single item modal close
  async closeModel() {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }
  segmentChanged(event) {
    console.log(event);
  }

  // all product item get from server
  items() {
    this.service.getApiResponcse().subscribe((res) => {
      this.allResponse = res;
      this.itemData = this.allResponse.data;
      // active tab product
      this.service.products = this.itemData[this.service.itemIndex].items;
    });
  }

  // click item tab to show item products
  itemProducts(i: any) {
    this.tabIndex = i;
    this.service.products = this.itemData[i].items;
    
  }

  // route from product page to product details
  productDetails(id: any, options: any) {
    if (options.length == 0) {
      this.productId = id;
      this.openModal();
    } else {
      this.route.navigate(['/product-details', { productId: id }]);
    }
  }
  orderList() {
    this.route.navigate(['/order-list']);
  }

  // For calculate total price
  get totalValue(): any {
    let singleItemtotal = 0;
    this.service.singleItemCart.forEach((element) => {
      if (element.cart == true) {
        singleItemtotal =
          singleItemtotal + element.quantity * element.item.basic_price;
      }
    });
    return singleItemtotal;
  }

//  product footer item list
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
  return this.service.itemCartFinal;
}
get totalValues(): any {
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
startOver(){
  this.route.navigate(["/home"]).then(() => {
    window.location.reload();
  });
}
}
