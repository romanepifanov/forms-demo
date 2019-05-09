import { Component, OnInit } from '@angular/core';
import { InterfaceStyle } from '../models/interface';
import { UserSettings } from '../models/user-settings';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})

export class UserSettingsFormComponent implements OnInit {
  private postError = false;
  private postErrorMessage = '';
  private originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  private userSettings: UserSettings = { ...this.originalUserSettings };
  private subscriptionTypes: Array<string> = ['Monthly', 'Annual', 'Lifetime'];
  private interfacies: Array<InterfaceStyle> = [
    { id: 'lightInterface', value: 'light', label: 'Light' },
    { id: 'mediumInterface', value: 'medium', label: 'Medium' },
    { id: 'darkInterface', value: 'dark', label: 'Dark' }
  ];

  constructor(
    private dateService: DataService
  ) { }

  ngOnInit() {
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {

    if (form.valid) {
      this.dateService.postUserSettingsForm(this.userSettings).subscribe(
        responce => console.log('success: ', responce),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }

  }

}
