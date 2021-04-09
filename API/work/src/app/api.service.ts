import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
   
  }
  getUser(){
   return this.http.get('http:');
  }

  token: string | any = localStorage.getItem('token')
  createUser(){
   return this.http.post('http://192.168.1.3:9000/auth/local', {"UserName":'admin', "password":'admin'},
   { headers: new HttpHeaders ({
    "Authorization": this.token
  }) }
  );
  }
  
  updateUser(){
   return this.http.put('http:',{});
  }
  deleteUser(){
   return this.http.delete('http:',{});
  }
}
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDRiMDdlZjExNjMwYWQwMmNkNmJkOGYiLCJpYXQiOjE2MTc4ODMwMTZ9.yUqQUvQz6C2fQl-DxdNJ7jVa4mjIlKf4NqKrNsOaHn8"
