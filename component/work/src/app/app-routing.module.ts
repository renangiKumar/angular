import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './gettingstarted/angular/angular.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { SetupComponent } from './gettingstarted/setup/setup.component';
import { TryitComponent } from './gettingstarted/tryit/tryit.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path:'introduction',
    component:IntroductionComponent,
  },
  {
    path:'gettingstarted',
    component:GettingstartedComponent,
    children: [
      {
        path:'angular',
        component:AngularComponent,
      },
      {
        path:'tryit',
        component:TryitComponent,
      },
      {
        path:'setup',
        component:SetupComponent,
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
