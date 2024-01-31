import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route: Router){}
  logout(){
    this.route.navigateByUrl('/');
    localStorage.removeItem("logindata");
  }
}
