import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';



const routes: Routes = [
  { path:'a', component:AComponent},
  { path:'b', component:BComponent},
  { path:'c',loadChildren:() =>import('./c/c.module').then(m=>m.CModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
