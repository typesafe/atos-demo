import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationService } from "app/shared/notification-service";

@Component({
  template: '<div>routed comp.<button (click)="foo()">alert from comp</button></div>',
selector: 'portlet1'
})
export class RoutedComponent{

  constructor(private _ns : NotificationService){

  }
  foo(){
    this._ns.alert("alert from comp");
  }
}
const routes: Routes = [
  {path:'', component: RoutedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Portlet1RoutingModule { }
