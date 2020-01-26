import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-loginpage',
	templateUrl: './loginpage.component.html',
	styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

	private submitted: boolean = false;
	private profileForm = new FormGroup({
		email: new FormControl(null, [
			Validators.required,
			Validators.maxLength(180),
			Validators.email,
			Validators.pattern(new RegExp('@pseu.edu$'))
		]),
		password: new FormControl(null, [
			Validators.required,
			Validators.minLength(6),
			Validators.maxLength(12),
			Validators.pattern(new RegExp('majdew'))
		])
	});

	constructor(private router: Router) { }

	ngOnInit() { }

	get control() {
		return this.profileForm.controls;
	}

	validate() {
		this.submitted = true;
		if (this.profileForm.invalid) {
			console.log("email errors: ");
			console.log(this.profileForm.get("email").errors);
			console.log("password errors: ");
			console.log(this.profileForm.get("password").errors);
		}
		else {
			console.log("no errors");
			this.router.navigate(['homepage']);
		}

	}
}
