import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css']
})
export class GettingstartedComponent implements OnInit {

  constructor(private navi:Router) { }
  angular(){
    this.navi.navigate(['./gettingstarted/angular'])
  }
  tryit(){
    this.navi.navigate(['./gettingstarted/tryit'])
  }
  setup(){
    this.navi.navigate(['./gettingstarted/setup'])
  }

  ngOnInit(): void {
  }

}
