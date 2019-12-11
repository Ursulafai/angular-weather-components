import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry, countries$} from '../mock/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentCountry: ICountry;
  public countries$: Observable<ICountry[]> = countries$;

  public setCurrentCountry(country: ICountry): void {
    this.currentCountry = country;
  }
}

