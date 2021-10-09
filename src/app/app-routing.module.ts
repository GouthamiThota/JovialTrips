import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesComponent } from './buses/buses.component';
import { CardsComponent } from './cards/cards.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FlightsComponent } from './flights/flights.component';
import { HolidaypackagesComponent } from './holidaypackages/holidaypackages.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'flights',component:FlightsComponent},
  {path:'buses',component:BusesComponent},
  {path:'holidaypackages',component:HolidaypackagesComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'cards',component:CardsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'' ,redirectTo: 'home',pathMatch:"full"},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
