import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Input() contacts!: Contact[] | null
  @Output() onSelect = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
