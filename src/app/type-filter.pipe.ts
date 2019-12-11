import { Pipe, PipeTransform } from '@angular/core';
import {ICountry} from '../mock/countries';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(countries: ICountry[]): ICountry[] {
    if (!countries) {
      return;
    }
    let types: Map<string, ICountry>;
    types = new Map();
    countries.forEach((country) => {
          types.set(country.type, country);
        }
      );
    return [... types.values()];
  }

}
