import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'mister-bitcoin';
  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute) { }
  user!: User
  @Output() onSelectPage = new EventEmitter()

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser()
    console.log(this.user)
    if (!this.user) {
      this.router.navigateByUrl('signup')
    }
  }
}
