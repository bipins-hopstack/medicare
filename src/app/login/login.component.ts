import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  title = 'Angular Form Validation Tutorial'
  angForm!: FormGroup;
  
  // variable is created of type FormGroup is created
  name: string = ""; 
  email: string = ""; 
  password:string="";
  
  
  
  constructor(private fb: FormBuilder,private dataService:DataService,private route:Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
  
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })


  authUser(){
    
    this.name=this.angForm.get('name')?.value;
    this.email=this.angForm.get('email')?.value;
    this.password=this.angForm.get('password')?.value;
    console.log("Entered user Name =>"+this.name);
      console.log("Entered user Email =>"+this.email);
      console.log("Entered user password =>"+this.password);
    if(this.name=="bipin"&&this.password=="pass"&&this.email=="bipin@gmail.com"){
      console.log("Entered user Name =>"+this.name);
      console.log("Entered user Email =>"+this.email);
      console.log("Entered user password =>"+this.password);
      this.dataService.username=this.name;
      this.route.navigate(['/cart']);
    }
 
  }
}
