import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private dataService:DataService) { 
    this.items= this.dataService.getItems();
    console.log(this.items= this.dataService.getItems());
    this.noOfItems=this.dataService.noOfItems;
    this.totalprice=this.dataService.totalprice;   
  }
  
  product: any;
  items:any[]=[];
  noOfItems;
  totalprice: any;
 

  ngOnInit(): void {
  }

}
