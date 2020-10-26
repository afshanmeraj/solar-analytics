import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = `https://restcountries.eu/rest/v2/`;
  constructor(private httpClient: HttpClient) {}

  public getCountries() {
    return this.httpClient.get<ReadonlyArray<Country>>(
      `${this.API_URL}all`,
    );
  }

  public getCountryByCode(code: string) {
    return this.httpClient.get<Country>(
      `${this.API_URL}alpha/${code}`,
    );
  }
}
