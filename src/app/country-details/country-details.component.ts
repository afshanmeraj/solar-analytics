import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import { MatIconRegistry } from '@angular/material/icon';
import { Country } from '../api/country.model';
import { ApiService } from '../api/api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import * as Rx from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {

  country$: Rx.Observable<Country>;

  constructor(
    private api: ApiService,
    sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.country$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.api.getCountryByCode(params.get('code')))
    );
  }

  getCountryDetails(code: string){
    this.router.navigate(['/country-details', code], {relativeTo: this.route.parent});
  }
  
}
