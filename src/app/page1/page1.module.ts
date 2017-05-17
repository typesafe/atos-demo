import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Portlet1Module } from '../portlet1/portlet1.module';
import { Page1RoutingModule } from "app/page1/page1-routing.module";
import { Page1Component } from "app/page1/page1.component";
//import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    Portlet1Module,
    Page1RoutingModule,
   // SharedModule
  ],
  declarations: [
    Page1Component
  ]
})
export class Page1Module { }
