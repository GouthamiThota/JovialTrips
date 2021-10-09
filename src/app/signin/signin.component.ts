import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  dosignin(result:NgForm){
    console.log("data in form is:"+result );
  }
  constructor() { }

  ngOnInit(): void {
  }

}
