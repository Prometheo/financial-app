import { Component, OnInit } from '@angular/core';
import { currencySend } from './currencydetails';
import { CurrencydataService } from './currencydata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _currencyService: CurrencydataService) {}

  ngOnInit() {
    this.listCurrencies()
  }

  currencyDetailsModel = new currencySend('','',1)
  currencies;
  result;

  onSubmit(){
    console.log(this.currencyDetailsModel)
    this._currencyService.convertCurrency(this.currencyDetailsModel).subscribe(
      data => {
        console.log("Success", data)
        this.result = data['result']
      },
      error => {
        console.log('error', error)
      }
    )
  }

  listCurrencies() {
    console.log(this.currencyDetailsModel);
    this._currencyService.getCurrencies().subscribe(
      data => {
        this.currencies = [...data]
        console.log(this.currencies)
      },
      error => {
        console.log('error', error)
      }
    )
  }
}
