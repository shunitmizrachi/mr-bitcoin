import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  subscription!: Subscription
    contacts!: Contact[]
    contacts$!: Observable<Contact[]>
    selectedContactId!: string

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    console.log(this.contacts$)
  }

  

}
