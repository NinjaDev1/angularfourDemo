import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
	
	signinForm: FormGroup;
	
	constructor(private router: Router, private user: UserService) {
	}
	
	ngOnInit() {
		this.signinForm = new FormGroup({
			'email': new FormControl(null, [Validators.required] ),
			'password': new FormControl(null, [Validators.required] )
		});
 	}
	
/*	loginTD(form: NgForm) {
		console.log(form);
		// if(username=='admin' && password == 'admin'){
		// 	this.user.setUserlogIn();
		// 	this.router.navigate(['dashboard']);
		// }
		// return false;
	}*/
	
	loginRF() {
		
		this.user.fnCheckLogIn(this.signinForm.value);
		this.user.setUserlogIn();
		this.router.navigate(['dashboard']);
		// if(username=='admin' && password == 'admin'){
		// 	this.user.setUserlogIn();
		// 	this.router.navigate(['dashboard']);
		// }
		// return false;
	}
}
