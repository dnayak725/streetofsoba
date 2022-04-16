import { SharedService } from './../shared.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinning-location',
  templateUrl: './dinning-location.page.html',
  styleUrls: ['./dinning-location.page.scss'],
})
export class DinningLocationPage implements OnInit {
 

  constructor(private route:Router,private localstore:LocalStorageService,public service:SharedService) { }
  public diningArray:any= [
    {id: 1, dining_img: '../../assets/img/image.jpg', dining_title: 'Eat In'},
    {id: 2, dining_img: '../../assets/img/image.jpg', dining_title: 'Take Out'},
  
   
];
  ngOnInit() {
  }
diningBook(diningTitle:any){
  // this.localstore.store("dining_title", diningTitle)
  this.service.dinigLocation = diningTitle
this.route.navigate(['/items'])
}
}
