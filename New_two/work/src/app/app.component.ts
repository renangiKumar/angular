import { Component } from '@angular/core'
 import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'work';
  
   constructor (private lo:Router){}

   
   login(){
     let data= {
       data:'hello'
     }
    this.lo.navigate(['/', 'login',data]);
    // this.lo.navigate(['/login'])
   }
  
  
  signup(){
    
      this.lo.navigate(['/signup']);
   }
}

 

 
