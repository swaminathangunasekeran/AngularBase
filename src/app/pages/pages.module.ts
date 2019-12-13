import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
// import {HomeModule} from "./home/home.module";
import {HomeComponent} from "./home/home.component";
import {PagesRoutingModule} from "./pages-routing.module";

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule
  ]

})
export class PagesModule {

  constructor(){
    console.log("PagesModule ____")
  }

 }
