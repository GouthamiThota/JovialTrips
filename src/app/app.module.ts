import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { BusesComponent } from './buses/buses.component';
import { PackagesComponent } from './packages/packages.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HolidaypackagesComponent } from './holidaypackages/holidaypackages.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    FlightsComponent,
    BusesComponent,
    PackagesComponent,
    SignupComponent,
    SigninComponent,
    HolidaypackagesComponent,
    CardsComponent,
    FooterComponent,
    ContactusComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
