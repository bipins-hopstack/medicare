import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
  postId: any=1;
  productForm!: FormGroup;

 
  constructor(private http:HttpClient,private dataService:DataService,private route:Router,private fb:FormBuilder) { 
    this.loadpost();
    this.createForm();
    
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
  
    prodCategory: String=""
    prodName:String="test"
    prodQuantity:number=0
    prodDesc:string=""
    prodAvail:string=""
    prodBrand:string =""
    prodImg:string=""
    prodPrice:string=""                     
   

    createForm() {
      this.productForm = this.fb.group({
        prodCategory: ['', Validators.required ],
     
        prodName: ['', Validators.required ],
     
        prodQuantity :['', Validators.required ],
     
        prodDesc: ['', Validators.required ],
     
        prodAvail: ['', Validators.required ],
     
        prodBrand: ['', Validators.required ],
     
        prodImg: ['', Validators.required ],
     
        prodPrice: ['', Validators.required ],
     
      });
    }
  
insertProduct() {
  const headers = { 'content-type': 'application/json'} ; 
 
 var product2={
 "prodCategory":"antibiotics",
 "prodName":this.productForm.get('prodName')?.value,
 "prodQuantity":this.productForm.get('prodQuantity')?.value,
 "prodDesc":this.productForm.get('prodDesc')?.value,
 "prodAvail":this.productForm.get('prodAvail')?.value,
 "prodBrand":this.productForm.get('prodBrand')?.value,
 "prodImg":this.productForm.get('prodImg')?.value,
 "prodPrice":this.productForm.get('prodPrice')?.value
}
console.log(" getitn the product name"+this.productForm.get('prodName')?.value)
  //const body=JSON.stringify(product2);
  console.log("this is Json body"+product2);
  this.http.put<any>('http://127.0.0.1:8080/product', product2, { headers })
      .subscribe(data => this.postId = data.id);
  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
   
}


update(product: any){
  const headers = { 'content-type': 'application/json'} ; 
  //const body=JSON.stringify(product2);
  console.log("this is Json body"+product);
  this.http.put<any>('http://127.0.0.1:8080/product', product, { headers })
      .subscribe(data => this.postId = data.id);
  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
   alert("Product updated Refresh page for updated data");
}
 


 delete(product:any){
  const headers = { 'content-type': 'application/json'} ; 
  //const body=JSON.stringify(product2);
  id : String = product.id;
  console.log(product.id);
  this.http.delete<any>(`http://127.0.0.1:8080/product/${product.id}`, { headers })
      .subscribe(() => this.postId = 'Delete successful');
  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
  alert("Product Deleted Succesfully");
  this.route.navigate(['/manageproduct']);
}


}
