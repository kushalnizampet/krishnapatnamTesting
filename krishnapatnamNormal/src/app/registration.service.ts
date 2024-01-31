import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './config/config';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  postUrl = 'http://localhost:3000/register'
  
  constructor(private http:HttpClient) { }
  postData(data:any){
    return this.http.post(this.postUrl,data);
  }

}
