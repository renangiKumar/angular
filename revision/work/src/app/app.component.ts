import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wallpapers';

  
  
  image="./assets/wall.jpg";



  i:any;
  show(){
    this.i='./assets/wall.jpg';
  }

  name:string="kumar"

  array =[
    {id:1, name:"kumar"},
    {id:2, name:"sai"},
    {id:3, name:"arvind"}
    ]
    
  x:number=0;

  color:string=""
  constructor(private lo:Router ){}
 ok(){
   let data={
     data: 'hello'
   }
   this.lo.navigate(['/','a',data]);
 }
 
}
