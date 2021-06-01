import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './styles/autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateComponent } from './styles/date/date.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-Browser/animations/';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ButtonsComponent } from './styles/buttons/buttons.component';
import {MatIconModule} from '@angular/material/icon';
import { BadgeComponent } from './styles/badge/badge.component'
import {MatBadgeModule} from '@angular/material/badge';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';




@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    DateComponent,
    ButtonsComponent,
    BadgeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatBottomSheetModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
