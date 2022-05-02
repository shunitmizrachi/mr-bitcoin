import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
})
export class StatisticsPageComponent implements OnInit {
  marketPrice!: any
  transactions!: any
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
  this.bitcoinService.getMarketPrice().subscribe(price => this.marketPrice = price)
  this.bitcoinService.getTransactions().subscribe(currTransactions => this.transactions = currTransactions)
    // console.log(this.marketPrice)
  }

}
