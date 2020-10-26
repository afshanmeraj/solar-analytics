import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import { ApiService } from '../api/api.service';
import { Country } from '../api/country.model';
import { FormControl } from '@angular/forms';
import { map, startWith, distinct, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries$: Rx.Observable<ReadonlyArray<Country>>;
  filteredCountries$: Rx.Observable<ReadonlyArray<Country>>;
  filter: FormControl;
  region: FormControl;
  filter$: Rx.Observable<string>;
  region$: Rx.Observable<string>;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.countries$ = this.api.getCountries();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.region = new FormControl('');
    this.region$ = this.region.valueChanges.pipe(startWith(''));

    this.filteredCountries$ = Rx.combineLatest(this.countries$, this.filter$, this.region$)
      .pipe(
        map(
          ([countries, filterString, region]) =>  
            countries.filter(
              country => country.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 && 
              country.region.indexOf(region) !== -1
            )
        )
      );


    
  }

}
