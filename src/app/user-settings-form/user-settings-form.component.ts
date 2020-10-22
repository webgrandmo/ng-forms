import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: UserSettings = {
    name: 'Andriy',
    emailOffers: true,
    userInterface: 'Dark',
    subcriptionType: 'Annual',
    notes: 'Lorem ipsum'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
