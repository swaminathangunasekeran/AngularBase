import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {SpendsComponent} from "./spends/spends.component";

const dashboardRoutes:Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:"payment",
        loadChildren: () => import("./payment-and-fees/payment-and-fees.module").then(
        
         m => m.PaymentAndFeesModule
        )
         //component: PaymenAndFeesComponent
      },
      {
        path:"spends",
         component: SpendsComponent
      }

    ]
  
  },
 
]

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule] 
})
export class DashboardRoutingModule { }
