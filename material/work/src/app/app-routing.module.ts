import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './styles/autocomplete/autocomplete.component';
import { BadgeComponent } from './styles/badge/badge.component';

import { ButtonsComponent } from './styles/buttons/buttons.component';
import { DateComponent } from './styles/date/date.component';

const routes: Routes = [
  { path : 'Autocomplete', component : AutocompleteComponent },
  { path: 'Date', component : DateComponent},
  { path:'Buttons', component :ButtonsComponent},
  { path: 'Badge', component:BadgeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
