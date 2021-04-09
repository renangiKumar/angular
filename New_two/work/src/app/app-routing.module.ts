import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChildrenComponent } from './login/children/children.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GuardService } from './guard.service';

const routes: Routes = [


    {
       path: 'login',
        component: LoginComponent,

        children: [
          {
          path: 'child',
          component: ChildrenComponent,
        },
        ],
      canActivate:[GuardService]},


      // lazy loading 

    { path: 'signup',loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },

    
    //  { path: '',   redirectTo: '/login/child', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
