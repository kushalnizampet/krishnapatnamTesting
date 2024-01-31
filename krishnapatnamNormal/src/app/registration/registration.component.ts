import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  
})
export class RegistrationComponent {
  myform: FormGroup;

  
  constructor(private api:RegistrationService,private route:Router,private validatorService: ValidationService){
    this.myform = new FormGroup({
      name : new FormControl('',this.validatorService.nameValidation()),
      mobile : new FormControl('',Validators.required),
      username : new FormControl('',Validators.required),
      password : new FormControl('',this.validatorService.passwordValidation())
    })
  }

  redirectToLogin(){
    this.route.navigateByUrl('/')
  }
  submitData(){
    this.api.postData(this.myform.value).subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error:any)=>{
        console.warn(error);
      }
    )
  }
}
