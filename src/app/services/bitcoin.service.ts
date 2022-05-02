import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }




public getRate(coins: number){
  return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  .pipe(
      map(res => res)
  ) 
}

public getMarketPrice(){
  return this.http.get<{}>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
  .pipe(
      map(res => res)
  ) 
}

public getTransactions(){
  return this.http.get<{}>('https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true')
  .pipe(
      map(res => res)
  ) 
}
}



