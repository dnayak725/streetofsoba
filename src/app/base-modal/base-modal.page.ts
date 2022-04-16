import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ModalController, NavParams } from '@ionic/angular';
import { SharedService } from '../shared.service';
import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.page.html',
  styleUrls: ['./base-modal.page.scss'],
})
export class BaseModalPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  inboundClick = true;
  outboundClick = true;
  private scrollDepthTriggered = false;

  constructor(
    private modalController: ModalController,
    private localstore: LocalStorageService,
    public service: SharedService
  ) {}
  dataReturned: any;
  @Input() optionId: any;
  @Input() item_Id: any;
  optionsData: any = [];
  showHide: boolean = true;
  hideShow: boolean = false;
  clickData = 0;
  selectVariable:any;
selectOptName:any;  
  funa() {
    console.log(this.service.productOption);
    console.log(this.optionsData);
  }
  
  ngOnInit() {
    // if (this.service.filterOptions.length != 0) {
    //   if(this.service.autoOpenPopup == true && this.service.autoOpenPopup2 == true ){
    //     this.service.productOption.forEach((element) => {
    //       if (element.id == this.service.filterOptions[0]['id']) {
    //         this.service.productOption.forEach((element2) => {
    //           if (element.variable_name == element2.variable_name)
    //             this.optionsData.push(element2);
    //         });
    //       }
    //     });
    //   }if(this.service.autoOpenPopup == false && this.service.autoOpenPopup2 == true ){
    //     this.service.productOption.forEach((element) => {
    //       if (element.id == this.service.filterOptions[1]['id']) {
    //         this.service.productOption.forEach((element2) => {
    //           if (element.variable_name == element2.variable_name)
    //             this.optionsData.push(element2);
    //         });
    //       }
    //     });
    //   }

    // } else {
    // option name filter from service productDetails response
    this.service.productOption.forEach((element) => {
      if (element.id == this.optionId) {
        this.service.productOption.forEach((element2) => {
          if (element.variable_name == element2.variable_name)
            this.optionsData.push(element2);
            
        });
      }
    });
    // }
  }
  get countSelect(): any {
    let c = 0;
    this.optionsData.forEach((modalvalue) => {
      if (this.service.selectedItem) {
        this.service.selectedItem.forEach((z) => {
          if (z.id == modalvalue.id) {
            c += 1;
          }
        });
      }
    });

    return c;
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: BaseModalPage,
      componentProps: {
        optionId: this.optionId,
        itemId: 'this.itemId',
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
  // ScrollToBottom() {
  //   this.content.scrollToBottom(1500);
  // }
  ScrollToTop() {
    this.content.scrollToTop(500);
  }

  async logScrolling($event) {
    if (this.scrollDepthTriggered) {
      return;
    }
    if ($event.target.localName != 'ion-content') {
      return;
    }

    const scrollElement = await $event.target.getScrollElement();
    const scrollHeight =
      scrollElement.scrollHeight - scrollElement.clientHeight;
    // console.log({ scrollHeight });

    const currentScrollDepth = $event.detail.scrollTop;
    // console.log({ currentScrollDepth });

    const targetPercent = 90;

    let triggerDepth = (scrollHeight / 100) * targetPercent;
    // console.log({ triggerDepth });

    if (currentScrollDepth > triggerDepth) {
      // console.log('100%');
      this.showHide = false;
      this.hideShow = true;
    }

    if (currentScrollDepth == 0) {
      // console.log('0%');
      this.showHide = true;
      this.hideShow = false;
    }
  }
  actionMethod() {
    this.content.scrollToBottom(500);
    this.showHide = false;
    //($event.target as HTMLButtonElement).hidden = true;
  }

  // async closeModel() {
  //   if (
  //     this.service.autoOpenPopup == true &&
  //     this.service.autoOpenPopup2 == true
  //   ) {
  //     this.service.autoOpenPopup = false;
  //     const close: string = 'Modal Removed';
  //     await this.modalController.dismiss(close);
  //     this.openModal();
  //   } else if (
  //     this.service.autoOpenPopup == false &&
  //     this.service.autoOpenPopup2 == true
  //   ) {
  //     this.service.autoOpenPopup2 = false;
  //     const close: string = 'Modal Removed';
  //     await this.modalController.dismiss(close);
  //     this.service.filterOptions = [];
  //   }
  // }
  // Item Option selection
  selectItem(data: any) {
    if(data.variable_name == "Size"){
    this.service.selectOptName = data.option_name;  
    for (let i = 0; i < this.service.selectedItem.length; i++) {
      if (this.service.selectedItem[i].variable_name == "Protein") {
        this.service.selectedItem.splice(i, 1);
      }
      if (this.service.selectedItem[i].variable_name == "Add Protein") {
        this.service.selectedItem.splice(i, 1);
      }
    }
  }
    if(data.variable_name == "Protein"){
      this.service.selectProteinOption = data.option_name;
      for (let i = 0; i < this.service.selectedItem.length; i++) {
        if (this.service.selectedItem[i].variable_name == "Add Protein") {
          this.service.selectedItem.splice(i, 1);
        }
      
      }
    }

       
      
  
    this.clickData = this.clickData + 1;

    if (this.service.containsObject(data, this.service.selectedItem) == false) {
      let existItem = false;
      let item;
      if (data['button_type'] == 'radio') {
        this.closeModel();

        this.service.selectedItem.forEach((element) => {
          if (
            element.item_id == data['item_id'] &&
            element.variable_name == data['variable_name']
          ) {
            existItem = true;
            item = element;
          }
        });
        if (existItem == false) {
          this.service.selectedItem.push(data);
        } else {
          for (let i = 0; i < this.service.selectedItem.length; i++) {
            if (this.service.selectedItem[i] == item) {
              const index1 = this.service.selectedItem.indexOf(
                this.service.selectedItem[i]
              );
              if (index1 > -1) {
                this.service.selectedItem.splice(index1, 1);
              }
            }
          }
          this.service.selectedItem.push(data);
          existItem == false;
        }
      } else {
        this.service.selectedItem.push(data);
        if (this.countSelect == data.select_max) {
          this.closeModel();
        }
      }
    } else {
      // If Select item exist it will delete the index
      if (this.service.selectedItem != null) {
        for (let i = 0; i < this.service.selectedItem.length; i++) {
          if (this.service.selectedItem[i] == data) {
            const index1 = this.service.selectedItem.indexOf(
              this.service.selectedItem[i]
            );
            if (index1 > -1) {
              this.service.selectedItem.splice(index1, 1);
            }
          }
        }
      }
    }
    
   
    this.selectVariable = this.service.selectedItem[0].variable_name
    console.log(this.selectVariable)
  }
  get ItemOptionselect():any{
   
   let a;
  
   a=this.service.selectOptName;
  //  console.log(a)
    return a
    
     }
     get ProteinOptionselect():any{
   
      let b;
     
      b=this.service.selectProteinOption;
     
       return b
       
        }
  // get autoPopup(): any {
  //   if (this.autoOpenPopup == true && this.autoOpenPopup2 == true) {

  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  async closeModel() {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  
  }
 
}
