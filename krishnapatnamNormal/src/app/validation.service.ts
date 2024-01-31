import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  nameValidation(){
    var name= [Validators.required,Validators.maxLength(15)];
    return name;
  }
  passwordValidation(){
    var password = [Validators.required,Validators.maxLength(15),Validators.minLength(8)]
    return password;
  }
  emailRegex = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
  emailValidation(){
    var email = [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]
    return email;
  }
}
