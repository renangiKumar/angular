import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


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
   return this.http.put('http://192.168.1.3:9000/auth/local',{});
  }
  deleteUser(){
   return this.http.delete('http:',{});
  }
}

