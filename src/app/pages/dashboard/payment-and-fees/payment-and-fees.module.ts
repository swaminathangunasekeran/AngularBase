import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymenAndFeesComponent } from './paymen-and-fees.component';
import {PaymentAndFeesRoutingModule} from "./payment-and-fees-routing.module"


@NgModule({
  declarations: [PaymenAndFeesComponent],
  imports: [
    CommonModule,
    PaymentAndFeesRoutingModule
  ]
})
export class PaymentAndFeesModule { 

  constructor(){
    console.log("Payment and fees module");
  }
}
