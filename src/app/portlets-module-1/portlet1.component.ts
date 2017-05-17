
import { Portlet } from "app/shared/portlet-decorator";
import { Component } from "@angular/core";
import { NotificationService } from "app/shared/notification-service";

@Portlet()
@Component({
  template: `
  <div class=card>
  PORTLET 1
  <button (click)="foo()">alert from comp</button>
  </div>
  `,
selector: 'portlet1'
})
export class Portlet1Component{

  constructor(private _ns : NotificationService){

  }
  foo(){
    this._ns.alert("alert from portlet 1");
  }
}