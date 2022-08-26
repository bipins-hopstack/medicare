import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product: any;
  items:any[]=[];
  noOfItems:number=0;
  totalprice:number=0;
  username: string="";

 cartData: any;
  
 constructor() { }
 
public addToCart(product: any) {
    this.items.push(product);
    this.noOfItems+=1
    this.totalprice=this.totalprice+product.prodPrice;
  }

 public getItems() {
    return this.items;
  }

  public clearCart() {
    this.items = [];
    return this.items;
  }

  public removeItems(product:any){
    this.items.pop();
  }
}
