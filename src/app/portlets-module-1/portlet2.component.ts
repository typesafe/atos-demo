
import { Portlet } from "app/shared/portlet-decorator";
import { Component } from "@angular/core";
import { NotificationService } from "app/shared/notification-service";

@Portlet()
@Component({
  template: `
  <div class=card>
  PORTLET 2 which also contains dynamic portlet 3
  <button (click)="foo()">alert</button>

  <ng-template [portlet]="'Portlet3Component'"></ng-template>
  </div>
  `,
selector: 'portlet2'
})
export class Portlet2Component{

  constructor(private _ns : NotificationService){

  }
  foo(){
    this._ns.alert("alert from portlet 2");
  }
}