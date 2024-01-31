import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('form',{static:true}) form!:NgForm;
  loginObj:any={
    username:"",
    password:""
  }
  constructor(private route:Router,private api:LoginService){}
  
  login(){
    this.api.getuserNameAndPassword(this.loginObj.username,this.loginObj.password).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length>0){
          this.api.invalidUser.emit(false);
          this.route.navigateByUrl('/main');
          localStorage.setItem("logindata",JSON.stringify(data));
        }
        else{
          this.api.invalidUser.emit(true);
          this.api.invalidUser.subscribe(
            (result:any)=>{
              if(result){
                console.warn("wrong password");
              }}
          )
        }
      },
      (error:any)=>{
        console.warn(error);
      }
    )
  }
  register(){
    this.route.navigateByUrl('/register')
  }

}
