import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
ranks=[1,2,3,4,5,6,7,8,9,10];
getClass(rank: any){
  if(rank <=3)
  return "excellent";

  else if(rank<=6)
  return "verygood";


  else  (rank <=10) 
  return "good";


}
}
