import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicare';
  
  
  loggedUser!:string;
  constructor(private dataService:DataService,private cd: ChangeDetectorRef) { 
  this.loggedUser=this.dataService.username;
  console.log("logged user name is =>"+ this.loggedUser);
  console.log("logged user name is =>"+ this.cd);
  }

}
