import { EventEmitter, Injectable } from '@angular/core';
import { baseUrl } from './config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  invalidUser = new EventEmitter<boolean>

  constructor(private http:HttpClient) { }

  
  getuserNameAndPassword(username:any,password:any){
  return this.http.get(`${baseUrl}/register?username=`+username+"&password="+password);
  
  }
}
