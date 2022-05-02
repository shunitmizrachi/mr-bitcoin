import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
})
export class TransferFundComponent implements OnInit {
  @Input() contact!: Contact
  @Input() user!: User
  @Output('transfer') onTransfer = new EventEmitter<number>()
  amount!:number
  isBiggerThanMax: boolean = false
  isInvalidAmount: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onTransferCoins() {
    console.log(this.amount)
    if (this.amount > this.user.coins) {
     this.isBiggerThanMax = true
     this.isInvalidAmount = false
     return
    } else if(this.amount < 1) {
    this.isInvalidAmount = true
    this.isBiggerThanMax = false
    return
    }else {
      this.isBiggerThanMax = false
      this.isInvalidAmount = false
      this.onTransfer.emit(this.amount)
    }
  }

}
