import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:HttpClient,private dataService:DataService,private route:Router) { 
    this.loadpost();
  }

  ngOnInit(): void {
  }
public index:number=0;
public products: any=[];
    //loading the REST Json
    loadpost(){    
      this.http.get('http://127.0.0.1:8080/products')
       .subscribe((products:any)=>{this.products=products});
      console.log(this.products);
    }
  

addtocart(product: any){
  
 this.dataService.addToCart(product);

}
buyitnow(product:any){
  this.dataService.addToCart(product)
  this.route.navigate(['/cart']);
}
}
