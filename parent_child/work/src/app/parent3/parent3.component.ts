import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {

  constructor() { }
  message: string |any;
  reciveMessage($event: any){
    this.message=$event
  }

  ngOnInit(): void {
  }



}
