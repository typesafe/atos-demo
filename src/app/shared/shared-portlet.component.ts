
import { Portlet } from "app/shared/portlet-decorator";
import { Component } from "@angular/core";
import { NotificationService } from "app/shared/notification-service";

@Portlet()
@Component({
  template: `
  <div class=card>
  SHARED PORTLET
  <button (click)="foo()">alert</button>

  </div>
  `,
selector: 'shared-portlet'
})
export class SharedPortletComponent{

  constructor(private _ns : NotificationService){

  }
  foo(){
    this._ns.alert("alert from shared portlet");
  }
}