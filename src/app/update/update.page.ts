import { element } from 'protractor';
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UpdateModalPage } from '../update-modal/update-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  item_id: any;
  item: any = [];
  editItem: any = [];
  filterOptions: any = [];
  index: any;
  dataReturned: any;
  optionId: any;
  itemId: any;
  optionName: any = [];
  flag:any = false;
  separation:any = false;
  separation2:any = false;
  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    public service: SharedService,
    public modalController: ModalController,

  ) {}

  ngOnInit() {
    console.log(this.editItem)
    this.productDetails();
    this.service.selectedItem = []
    this.item['options'].forEach(element => {
      this.service.selectedItem.push(element)
    });
  }
  cartQuantity(operator: any) {
    if (operator == '+') {
      this.service.itemCartFinal[this.index]['quantity'] += 1;
    } else {
      if (this.service.itemCartFinal[this.index]['quantity'] != 1) {
        this.service.itemCartFinal[this.index]['quantity'] -= 1;
      }
    }
  }
  
  async openUpdateModal() {
    const modal = await this.modalController.create({
      component: UpdateModalPage,
      componentProps: {
        optionId: this.optionId,
        itemId: this.item_id,
      },
      backdropDismiss:false
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

   // open base modal with option data of items
   openOptionModal(optionId: any, itemId: any, mandatory: any) {
    if (mandatory != 1) {
      this.optionId = optionId;
      this.item_id = itemId;
      this.openUpdateModal();
    }
  }
  update(){
    this.service.itemCartFinal[this.index]['options'] = [];
    this.service.selectedItem.forEach(element => {
      this.service.itemCartFinal[this.index]['options'].push(element)
    });
    this.service.selectedItem = []
    this.service.productOption = []
    this.router.navigate(['/order-list'])
  }
  
  productDetails() {
    this.service.productOption  = []
    this.service.productDetails = [];
    this.service.filterOptions = []
    this.activeroute.params.subscribe((params) => {
      this.index = params['id'];
    });
    this.service.editIndex = this.index
    this.item = this.service.itemCartFinal[this.index];

    this.service.products.forEach((element) => {
      if (element.id == this.item['item_id']) {
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
  }
  backToOrderList(){
    this.router.navigate(['/order-list'])
  }


  changeflag(data:any){
    this.flag = data;
  }
 x(res:any){
this.separation = res
 }
 y(res2:any){
  this.separation2 = res2
   }
}
