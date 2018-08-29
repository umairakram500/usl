import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  nav:boolean;

  constructor() { }

  ngOnInit() {
  }

  navAction(){
    console.log(this.nav);
    this.nav = !this.nav;
  }



}
