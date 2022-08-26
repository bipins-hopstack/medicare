import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @ViewChildren("subTotal")
  subTotal!: ElementRef; 
  
  constructor(private dataService:DataService) { 
    this.items= this.dataService.getItems();
    console.log(this.items= this.dataService.getItems());
    this.noOfItems=this.dataService.noOfItems;
    this.totalprice=this.dataService.totalprice;   
  }

  ngOnInit(): void {
  }

  product: any;
  items:any[]=[];
  noOfItems;
  totalprice: any;
  eachProductPrice:number=0;

  


  checkOut(items:any){

  }
  
}
