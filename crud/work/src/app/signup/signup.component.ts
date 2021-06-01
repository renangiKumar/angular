import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted: any;
  constructor(private formbuilder: FormBuilder) {
    this.signupForm = this.formbuilder.group({
      firstName: ["",[Validators.required,Validators.minLength(4)]],
      lastName: ["", Validators.required],
    
      mobile: ["", [Validators.required,Validators.minLength(10)]],
      
      
    })
  }
  get f() { return this.signupForm.controls; }

  onsubmit() {
    this.submitted = true;
    // this.api.message=this.loginForm.value
    console.log(JSON.stringify(this.signupForm.value));
    localStorage.setItem('value', JSON.stringify(this.signupForm.value));
    // alert("submitted")
  }


  ngOnInit(): void {
  }

}
