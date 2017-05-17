import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from "app/shared/notification-service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    //NotificationService
  ], exports :[
    //NotificationService
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NotificationService]
    };
  }
}
