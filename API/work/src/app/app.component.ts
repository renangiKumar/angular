import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'work';
  text: string | any;
  constructor(private api:ApiService) {
    this.api.createUser().subscribe(res=>{
      console.log(res)
      this.text = res;
      localStorage.setItem('1', this.text['token'])
    })
   }

}

