import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = '';
  email = '';
  subject = '';
  message = '';

  constructor() { }

  ngOnInit() {

  }

  submit() {

    alert(1);

  }
}
