import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  transfer:string="";

  constructor( private siri:DataService) {
    this.transfer=this.siri.message;
   }

  ngOnInit(): void {
  }

}
