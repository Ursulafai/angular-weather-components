import {Component, Input, OnInit} from '@angular/core';
import {ICountry} from '../../mock/countries';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input()
  public currentCountry: ICountry;
}
