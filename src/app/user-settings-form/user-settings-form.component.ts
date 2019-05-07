import { Component, OnInit } from '@angular/core';
import { InterfaceStyle } from '../models/interface';
import { UserSettings } from '../models/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})

export class UserSettingsFormComponent implements OnInit {
  private originalUserSettings: UserSettings = {
    name: 'Roman',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };
  private userSettings: UserSettings = { ...this.originalUserSettings };
  private subscriptionTypes: Array<string> = ['Monthly', 'Annual', 'Lifetime'];
  private interfacies: Array<InterfaceStyle> = [
    { id: 'lightInterface', value: 'light', label: 'Light' },
    { id: 'mediumInterface', value: 'medium', label: 'Medium' },
    { id: 'darkInterface', value: 'dark', label: 'Dark' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
