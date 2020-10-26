import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component'
import { CountriesListComponent } from './countries-list/countries-list.component'
const routes: Routes = [
  { path: 'country-details/:code', component: CountryDetailsComponent, pathMatch: 'full'  },
  { path: 'list', component: CountriesListComponent },
  { path: '', component: CountriesListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
