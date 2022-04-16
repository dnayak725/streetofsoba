import { element } from 'protractor';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { ModalController, NavParams } from '@ionic/angular';
import { SharedService } from '../shared.service';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.page.html',
  styleUrls: ['./update-modal.page.scss'],
})
export class UpdateModalPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  inboundClick = true;
  outboundClick = true;
  private scrollDepthTriggered = false;
  index: any;
  item: any;

  constructor(
    private modalController: ModalController,
    private localstore: LocalStorageService,
    public service: SharedService,
    private activeroute: ActivatedRoute
  ) {}
  dataReturned: any;
  @Input() optionId: any;
  @Input() itemId: any;
  optionsData: any = [];
  showHide: boolean = true;
  hideShow: boolean = false;
  editItem: any = [];
  options: any = [];
  ngOnInit() {
    this.service.productOption.forEach((element) => {
      if (element.id == this.optionId) {
        this.service.productOption.forEach((element2) => {
          if (element.variable_name == element2.variable_name)
            this.optionsData.push(element2);
        });
      }
    });

    // <ng-container *ngFor="let i of editItem">
    // <ng-container *ngFor="let j of i.options">
    //   <ng-container *ngIf="j.id == optionId">
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
  async closeModel() {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

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
    
      console.log(this.service.selectProteinOption)
  
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
        if (this.countSelect == data.select_max
        ) {
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
  }

  // get autoPopup(): any {
  //   if (this.autoOpenPopup == true && this.autoOpenPopup2 == true) {

  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  get countSelect(): any {
    let c = 0;
    this.optionsData.forEach((modalvalue) => {
      if (this.service.selectedItem) {
        this.service.selectedItem.forEach((z) => {
          if (
           z.id == modalvalue.id
          ) {
            c += 1;
          }
        });
      }
    });
    console.log(c);
    return c;
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
       console.log(b)
        return b
        
         }
}
