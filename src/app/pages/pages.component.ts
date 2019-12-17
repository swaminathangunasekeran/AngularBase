import { Component, OnInit } from '@angular/core';
import {AuthData,User} from "@core/data/auth";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private authService:AuthData) { }

  ngOnInit() {
    console.log("ON INIT PagesComponent", this.authService.isAuthenticated());
 
  }

}
