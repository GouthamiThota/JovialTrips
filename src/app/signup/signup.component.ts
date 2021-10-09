import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  doLogin(result:NgForm){
    console.log("data in form is:"+result );
  }

  constructor() { }

  ngOnInit(): void {

  }

}
