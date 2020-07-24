// export class Currencydetails {
//   constructor(
//     public country_name: string,
//     public currency_id: string,
//     public currency_symbol: string,
//     public currency_name: string,
//     public amount: number,
//   ){}

// }

export class currencySend {
  constructor(
    public to_currency: string,
    public from_currency: string,
    public amount: number,
  ){}
}
