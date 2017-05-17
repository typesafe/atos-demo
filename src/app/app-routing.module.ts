import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  //{ path: 'lazy', loadChildren: './portlet1/portlet1.module#Portlet1Module' },
  { path: 'page1', loadChildren: './page1/page1.module#Page1Module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
