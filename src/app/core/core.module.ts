import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth-service.service";
import {AuthGuardService} from "./auth-guard.service";
import {AuthData} from "./data/auth";

const SERVICES =[
  AuthService,
  AuthGuardService
]

const DATA_SERVICES = [
  { provide: AuthData, useClass: AuthService },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ... SERVICES
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) { //for making this singleTon
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }

  static forRoot():ModuleWithProviders{
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ... SERVICES,
        ... DATA_SERVICES
      ]
    }
  }
}
