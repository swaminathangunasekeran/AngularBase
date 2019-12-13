import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {HomeComponent} from "./home/home.component";

const routes:Routes =[
{
path:'',
component:PagesComponent,
children:[
  {
    path:'home',
    component:HomeComponent
    
  },
  {
    path:"admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path:"dashboard",
    loadChildren:() => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  }
  ]
},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
