import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "app/shared/shared.module";
import { Portlet1Component } from "app/portlets-module-1/portlet1.component";
import { Portlet2Component } from "app/portlets-module-1/portlet2.component";
import { Portlet3Component } from "app/portlets-module-1/portlet3.component";
import { SharedPortletComponent } from "app/shared/shared-portlet.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Portlet1Component,
    Portlet2Component,
    Portlet3Component
  ], exports:[
    Portlet1Component,
    Portlet2Component,
    Portlet3Component
  ]
})
export class PortletsModule1Module { }
