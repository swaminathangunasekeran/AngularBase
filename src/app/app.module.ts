import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NotFoundComponent} from "./not-found/not-found.component"

//import {ShareModule} from "./@share/share.module";
import {CoreModule} from "@core/core.module";
// import {PagesModule} from "./pages/pages.module"
import {environment} from "@env";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    
    // ShareModule,
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
