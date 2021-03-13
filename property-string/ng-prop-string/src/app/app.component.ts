import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { propertyStringPathFactory } from 'property-string-path';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'ng-prop-string';
  public form: FormGroup;

  public controlPath = propertyStringPathFactory<User>();

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      company: this.fb.group({
        name: '',
        catchPhrase: '',
        bs: '',
      }),
      address: this.fb.group({
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: this.fb.group({
          lat: '',
          lng: '',
        }),
      }),
    });

    this.form.get(this.controlPath('address.geo.lat')).valueChanges.subscribe(console.log);
  }
}
