import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
user!: User
bitcoinRate!: number
constructor(private userService: UserService, private bitcoinService: BitcoinService,private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser()
    this.bitcoinService.getRate(this.user.coins).subscribe(rate => this.bitcoinRate = this.user.coins / rate)
    }
}
