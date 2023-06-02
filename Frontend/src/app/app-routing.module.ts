import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { DriverRegComponent } from './driver-reg/driver-reg.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [


   {path: 'home', component:HomeComponent},
  {path: 'userReg', component:UserRegComponent},
  {path: 'driverReg', component:DriverRegComponent},
  {path: 'bookings', component:BookingsComponent},
 {path:'navbar',component:NavbarComponent},
   {path: 'login', component:LoginComponent},
  
  
   { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
