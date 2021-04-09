import { Component,  EventEmitter,  OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  New:any;
  

  constructor() { }
  message:string="Holla mundo!!!!!!!!"
  @Output() messageEvent= new EventEmitter();

  sendMessage(){
    this.messageEvent.emit(this.message)
  }
  

  ngOnInit(): void {


}
}
