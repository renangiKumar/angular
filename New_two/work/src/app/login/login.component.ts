import { Component, OnInit,Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataService: any;
  name: any;
  login: any;
  data: any;
  

  constructor(private l: Router, private activatedRoute:ActivatedRoute, private kumar:DataService ) {
    this.kumar.message="hi i am kumar"
   }
  
  child(){
    this.l.navigate(['./login/child']);
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res =>{
      // console.log('params',res)
      this.name =res['data'];
    })

  }
 

}
function output() {
  throw new Error('Function not implemented.');
}

