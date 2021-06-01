import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentdashboard';

  studentDetails = null as any;
  studentToUpdate = {
    rollNumber:"",
    name:"",
    address:"",
    percentage:""
  }
  subscribe:any;
  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
  }

  register(registerForm: NgForm) {
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentsDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (resp: any) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.rollNumber).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getStudentsDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  edit(studuent: any){
    this.studentToUpdate = studuent;
  }

  updateStudent(){
    this.studentService.updateStudents(this.studentToUpdate).subscribe(
      (resp: any) => {
        console.log(resp);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
