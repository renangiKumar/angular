import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  value = 10;
  name:string="kumar";

  userEmail ='vsfsdfdfnbjdbn@gmail.com';
  
  
 b:any;
 show(){
   this.b ='./assets/download.png';
 }


 array=[
   {id:1,name:"kumar"},
   {id:2,name:"aravind"},
   {id:3,name:"sai"}
 ]

x:number=0;
color:string="";

// pipes
title = 'pipes';
todaydate = new Date();  
details = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
}
