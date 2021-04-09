import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {
  text:string|any;

  

  constructor(private sharedservice:SharedService) {
    this.sharedservice.notification.subscribe(res =>{
      this.text=res;
      })

 

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

