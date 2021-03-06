import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from "app/page1/page1-routing.module";
import { Page1Component } from "app/page1/page1.component";
import { SharedModule } from "app/shared/shared.module";
import { PortletsModule1Module } from "../portlets-module-1/portlets-module-1.module";
import { Portlet3Component } from "app/portlets-module-1/portlet3.component";
import { SharedPortletComponent } from "app/shared/shared-portlet.component";

@NgModule({
  imports: [
    CommonModule,
    PortletsModule1Module,
    Page1RoutingModule,
    SharedModule
  ],
  declarations: [
    Page1Component
  ],
  entryComponents:[
    Portlet3Component,
    SharedPortletComponent]
})
export class Page1Module { }
