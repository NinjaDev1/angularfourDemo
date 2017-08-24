import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {UserService} from "./user.service";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from "./auth.guard";


const appRoutes: Routes = [
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'body',
		component: BodyComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard]
	},


];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		BodyComponent,
		SignInComponent,
		HomeComponent,
		DashboardComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [UserService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule {
}
