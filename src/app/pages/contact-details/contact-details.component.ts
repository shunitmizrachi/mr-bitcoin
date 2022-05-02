import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent implements OnInit {
  subscription!: Subscription
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
) { }

  
contact!: Contact
user! : User
window!:any

ngOnInit() {
  this.route.data.subscribe(data=>{
    this.contact = data['contact']
 })
       this.subscription = this.userService.user$.subscribe(user => {
            this.user = user
        })
        
}

onBack() {
  this.router.navigateByUrl('contact')
}

onTransfer(amount: number) {
  this.userService.addMove(this.contact, amount)
  this.locationreloadcn()
  this.reloadComponent()
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}

reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

locationreloadcn() {
    location.reload();
    }
}


