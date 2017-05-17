import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from "app/page1/page1.component";

const routes: Routes = [
  {path:'', component: Page1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1RoutingModule { }
