 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Parent4Component } from './parent4/parent4.component';


 const routes: Routes = [
   {
     path:'parent', component:ParentComponent
   },
   {
    path:'parent2', component:Parent2Component
  },
  {
    path:'parent3', component:Parent3Component
  },
  {
    path:'parent4', component:Parent4Component
  }
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
export class AppRoutingModule { }
