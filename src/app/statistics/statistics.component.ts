import {Component, Input, OnInit} from '@angular/core';
import {ICountry} from '../../mock/countries';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input()
  public currentCountry: ICountry;
}
