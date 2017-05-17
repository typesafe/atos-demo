import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from "app/shared/notification-service";
import { DynamicHtmlDirective } from "app/shared/dynamic-html.directive";
import { SharedPortletComponent } from "app/shared/shared-portlet.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicHtmlDirective,
    SharedPortletComponent
  ], exports :[
    DynamicHtmlDirective,
    SharedPortletComponent
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
