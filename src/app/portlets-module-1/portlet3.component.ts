
import { Portlet } from "app/shared/portlet-decorator";
import { Component } from "@angular/core";
import { NotificationService } from "app/shared/notification-service";

@Portlet()
@Component({
  template: `
  <div class=card>
  PORTLET 3
  <button (click)="foo()">alert</button>
  </div>
  `,
selector: 'portlet3'
})
export class Portlet3Component{

  constructor(private _ns : NotificationService){

  }
  foo(){
    this._ns.alert("alert from portlet 3");
  }
}