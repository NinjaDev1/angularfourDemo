import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { environment } from "../environments/environment.prod";

@Injectable()
export class UserService {
	private isLoggedIn = false;
	
  constructor(private http:Http) {
     this.isLoggedIn = false;
  }
  
  setUserlogIn(){
	  this.isLoggedIn = true;
  }
  
  getUserLogIn(){
	  return this.isLoggedIn;
  }
  
  /*** function to check user logged in or not ***/
  
  fnCheckLogIn(form){
		/*console.log(environment.API_url);*/
		let url:string =environment.API_url+'api/sign-in';
		return this.http.post(url,form).map((data: any) => data.json())
			.subscribe(
				(data: any) => {
					this.isLoggedIn = true;
					return data;
				},
				err => console.log(err), // error
				() => console.log('getUserStatus Complete') // complete
			);
  }

}
