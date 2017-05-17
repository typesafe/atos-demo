
import { Injectable } from "@angular/core";
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NotificationService{

    private _alertSubject = new Subject<string>();
    alerts = this._alertSubject.asObservable();

    alert(message : string){
        this._alertSubject.next(message);
        //window.alert(message);
    }
}