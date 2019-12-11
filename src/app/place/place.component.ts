import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {countries, ICountry} from '../../mock/countries';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  public selectedCountry: ICountry;

  @Input()
  public countries: ICountry[];

  @Output()
  public countrySelectEvent = new EventEmitter<ICountry>();

  ngOnInit(): void {
    this.setCountry(this.countries[0]);
  }

  private setCountry(country: ICountry): void {
    this.selectedCountry = country;
    this.countrySelectEvent.next(country);
  }

}
