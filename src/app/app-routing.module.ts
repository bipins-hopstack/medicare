import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/products"},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"manageproduct",component:ManageproductComponent},
  {path:"cart",component:CartComponent},
  {path:"products",component:ProductsComponent},
  {path:"order",component:OrderComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
