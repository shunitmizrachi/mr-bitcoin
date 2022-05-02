import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Move } from 'src/app/models/move';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
})
export class MoveListComponent implements OnInit {
  @Input() user!: User
  @Input() contact!: Contact 
  currMoves!: Array<Move> | undefined
  isOnMoves:boolean = false
  constructor() { }

  ngOnInit() {
    if (this.contact) {
      this.currMoves = this.user.moves.filter( (el:any) => el.to === this.contact.name)
    } else {
      this.currMoves = this.user.moves
    }
    if (!this.currMoves || !this.currMoves.length) {
     this.currMoves = undefined
    } 
  }

  toggleIsOnMoves() {
    this.isOnMoves = !this.isOnMoves
  }
}
