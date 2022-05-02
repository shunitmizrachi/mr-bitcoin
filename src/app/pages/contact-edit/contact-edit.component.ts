import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
) { }

contact!:Contact

  ngOnInit(): void {
    this.route.data.subscribe(async ({ contact }) => {
      console.log(contact)
      this.contact = contact ? contact : this.contactService.getEmptyContact() as Contact
      console.log(this.contact)
    })
}

onSaveContact() {
this.contactService.saveContact({...this.contact})
console.log(this.contact)
this.router.navigateByUrl('contact')

}

onRemoveContact(contactId:string) {
this.contactService.deleteContact(contactId)
this.router.navigateByUrl('contact')
console.log(contactId)
}

onBack() {
  if (this.contact._id) {
    this.router.navigateByUrl(`contact/${this.contact._id}`)
  } else {
    this.router.navigateByUrl('contact')
  }
}
}