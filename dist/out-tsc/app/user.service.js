var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from "../environments/environment.prod";
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.isLoggedIn = false;
    }
    UserService.prototype.setUserlogIn = function () {
        this.isLoggedIn = true;
    };
    UserService.prototype.getUserLogIn = function () {
        return this.isLoggedIn;
    };
    /*** function to check user logged in or not ***/
    UserService.prototype.fnCheckLogIn = function (form) {
        var _this = this;
        /*console.log(environment.API_url);*/
        var url = environment.API_url + 'api/sign-in';
        return this.http.post(url, form).map(function (data) { return data.json(); })
            .subscribe(function (data) {
            _this.isLoggedIn = true;
            return data;
        }, function (err) { return console.log(err); }, // error
        function () { return console.log('getUserStatus Complete'); } // complete
        );
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
export { UserService };
//# sourceMappingURL=/var/www/html/angularfourDemo/public/src/app/user.service.js.map