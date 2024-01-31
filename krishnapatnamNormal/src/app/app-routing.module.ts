import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"main",component:MainComponent},
  {path:"about",component:AboutUsComponent},
  {path:"contact",component:ContactComponent},
  {path:'',redirectTo:"home",pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
