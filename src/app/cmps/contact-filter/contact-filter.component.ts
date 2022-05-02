import { Component, OnInit } from '@angular/core';
import { ContactFilter } from 'src/app/models/contact-filter';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
})
export class ContactFilterComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  filterBy: ContactFilter = {term:''} 

  ngOnInit(): void {
  }

  onChangeFilter() {
  this.contactService.loadContacts(this.filterBy)
}

}
