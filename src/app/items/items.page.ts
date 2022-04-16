import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(public service:SharedService, private route:Router, private localstore:LocalStorageService) { }

allResponse:any;
itemData:any=[];

  ngOnInit() {
    this.items();
  
  }

  // subscribe all api response
  items(){
    this.service.getApiResponcse().subscribe(res=>{
      this.allResponse = res;
      this.itemData = this.allResponse.data;
      
    })
  }

//  route to product page take the id of items
products(i:any){
  this.service.itemIndex = i
  this.route.navigate(["/products",{index:i}])
}
}
