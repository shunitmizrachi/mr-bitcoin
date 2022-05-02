import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }
  @Input() contact!: Contact 
  @Output() onSelect = new EventEmitter<string>()
  ngOnInit(): void {
  }

}
