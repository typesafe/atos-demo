import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Portlet1RoutingModule, RoutedComponent } from './portlet1-routing.module';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    //Portlet1RoutingModule,
    SharedModule
  ],
  declarations: [
    RoutedComponent
  ], exports:[
    RoutedComponent
  ]
})
export class Portlet1Module { }
