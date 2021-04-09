import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { UnderstandingComponent } from './understanding/understanding.component';
import { DevloperComponent } from './devloper/devloper.component';
import { AngularComponent } from './gettingstarted/angular/angular.component';
import { TryitComponent } from './gettingstarted/tryit/tryit.component';
import { SetupComponent } from './gettingstarted/setup/setup.component';
import { StartedComponent } from './gettingstarted/tryit/started/started.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    GettingstartedComponent,
    UnderstandingComponent,
    DevloperComponent,
    AngularComponent,
    TryitComponent,
    SetupComponent,
    StartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
