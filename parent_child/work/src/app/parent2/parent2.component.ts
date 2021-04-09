import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements  AfterViewInit {
  @ViewChild(Child2Component) child:any;

  constructor() { }
  message: string="";
  ngAfterViewInit(){
    this.message=this.child.message
  } 
}

// child to parent data share through viewchild
