import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchCurrencyService {
  private currencies: object;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.currencies = data;
    })
  }
  public getJSON(): Observable<any> {
    return this.http.get('../assets/currency.json');
  }
  getSymbol(code: string) {
    if (this.currencies[code]) {
      return this.currencies[code].symbol;
    } else {
      return;
    }
  }
  getName(code: string) {
    if (this.currencies[code]) {
      return this.currencies[code].name_plural;
    } else {
      return;
    }
  }
}
