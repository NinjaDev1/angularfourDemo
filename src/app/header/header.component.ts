import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	title = 'Welcome To Angular 4';
  constructor() { }

  ngOnInit() {
  
  }

}
