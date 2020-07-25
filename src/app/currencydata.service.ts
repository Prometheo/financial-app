import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { currencySend } from './currencydetails';


@Injectable({
  providedIn: 'root'
})
export class CurrencydataService {

  constructor(private _http: HttpClient) { }

  _url = 'https://finance.microapi.dev/v1/list_currencies/'
  conv_url = 'https://finance.microapi.dev/v1/convert_currency/'

  public httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getCurrencies() {
    return this._http.get<any>(this._url,this.httpOptions)
  }
  convertCurrency(details: currencySend) {
    return this._http.post<any>(this.conv_url,{'from_currency':details['from_currency'], 'to_currency': details['to_currency'], 'amount': details['amount']},this.httpOptions)
  }
}
