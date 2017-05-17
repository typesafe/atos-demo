import { Component } from '@angular/core';
import { NotificationService } from "app/shared/notification-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  messages = [];
  constructor(private _ns : NotificationService ){
    _ns.alerts.subscribe(val => {
      this.messages.push(val);
    });
  }

  alert(){
    this._ns.alert("foo");
  }
}
