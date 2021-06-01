import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: any;
  constructor(private formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      firstName: ["",[ Validators.required,Validators.minLength(4)]],
      lastName: ["", Validators.required],
      gender: [""],
      password: ["", [Validators.required, Validators.minLength(6)]],
      conformPassword: ["", [Validators.required]],
      check: [""],
    })
  }


  get f() { return this.registerForm.controls; }

  onsubmit() {
    this.submitted = true;
    // this.api.message=this.loginForm.value
    console.log(JSON.stringify(this.registerForm.value));
    localStorage.setItem('value', JSON.stringify(this.registerForm.value));
    // alert("submitted")
  }


  ngOnInit(): void {
  }
}
