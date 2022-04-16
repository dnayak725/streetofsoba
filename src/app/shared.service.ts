import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // for single item
  singleItemCart:any = [];
  itemCart:any = [];
  itemCartFinal:any = [];
  autoOpenPopup = true;
  autoOpenPopup2 = true;
  products:any=[];
  productDetails:any=[];
  productOption: any;
  selectedItem: any= [];
  allSingleProduct: any=[];
  itemIndex = 0;
  filterOptions: any = [];
  addtionalPopup = true
  editIndex: any;
  editOption: any = [];
  dinigLocation: any;
  selectOptName: any;
  selectProteinOption: any;
  coupon:boolean=false;
 
  constructor(
    private http: HttpClient,
    private localstore: LocalStorageService
  ) {}
  // all api response from server
  getApiResponcse() {
    // let url = 'http://127.0.0.1:8000/api/products';
    let url = 'https://poke-theory.quocent.com/api/products1';
    return this.http.get(url);
  }
    // post data
    postData(data:any) {
      console.log(data)
      // let url = 'http://127.0.0.1:8000/api/order';
      let url = 'https://poke-theory-2.quocent.com/api/order';
      return this.http.post(url,data);
    }
  
  containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}
  
}
