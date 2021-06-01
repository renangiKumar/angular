import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;


 
  constructor(private formbuider:FormBuilder) { 
    this.loginForm= this.formbuider.group ({
      userName :['',Validators.required],
      password :['',Validators.required]
    })
   

  }
  onsubmit() {
    this.submitted = true;
    // this.api.message=this.loginForm.value
    console.log(JSON.stringify(this.loginForm.value));
    localStorage.setItem ('value',JSON.stringify(this.loginForm.value));
    // alert("submitted")
  }
  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
  }

}
function value(value: any) {
  throw new Error('Function not implemented.');
}

