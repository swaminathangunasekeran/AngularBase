import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymenAndFeesComponent } from './paymen-and-fees.component';

const routes :Routes=[{
  path:'',
  component:PaymenAndFeesComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class PaymentAndFeesRoutingModule { }
