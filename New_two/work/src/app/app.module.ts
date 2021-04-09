import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ChildrenComponent } from './login/children/children.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { YPipe } from './y.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    ChildrenComponent,
    PagenotfoundComponent,
    YPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
