var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
var SignInComponent = (function () {
    function SignInComponent(router, user) {
        this.router = router;
        this.user = user;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signinForm = new FormGroup({
            'email': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required])
        });
    };
    /*	loginTD(form: NgForm) {
            console.log(form);
            // if(username=='admin' && password == 'admin'){
            // 	this.user.setUserlogIn();
            // 	this.router.navigate(['dashboard']);
            // }
            // return false;
        }*/
    SignInComponent.prototype.loginRF = function () {
        this.user.fnCheckLogIn(this.signinForm.value);
        this.user.setUserlogIn();
        this.router.navigate(['dashboard']);
        // if(username=='admin' && password == 'admin'){
        // 	this.user.setUserlogIn();
        // 	this.router.navigate(['dashboard']);
        // }
        // return false;
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css']
    }),
    __metadata("design:paramtypes", [Router, UserService])
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=/var/www/html/angularfourDemo/public/src/app/sign-in/sign-in.component.js.map