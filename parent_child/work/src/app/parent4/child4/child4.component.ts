import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {


  constructor(private sharedservice:SharedService ) { }

  ngOnInit(): void {
  }
  trigger(){
  this.sharedservice.notification.next("hello!!d!!!!!!!")
}

}
