import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  private profileForm = new FormGroup({
    email : new FormControl(null, [Validators.required ,Validators.maxLength(180), Validators.email, Validators.pattern(new RegExp('@pseu.edu$'))]),
    password : new FormControl(null , [Validators.required ,Validators.minLength(6) ,Validators.maxLength(12) ,Validators.pattern(new RegExp('[a-z]+[A-Z]+[0-9]+[^a-zA-Z0-9]'))])
  });

  constructor() { }

  ngOnInit() {
  }

  validate(){
    if(this.profileForm.invalid){
      console.log(this.profileForm.get("email").errors); 
      console.log("password errors: ");
      console.log(this.profileForm.get("password").errors);     


    }
    else{
      console.log("no errors")
    }

  }

}
