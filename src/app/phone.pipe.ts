import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number): string {
    const phoneStr: string = phone.toString();
    const tokens: string[] = [
      '+',
      phoneStr.substr(-12, 2),
      ' (',
      phoneStr.substr(-10, 3),
      ') ',
      phoneStr.substr(-7, 3),
      '-',
      phoneStr.substr(-4, 2),
      '-',
      phoneStr.substr(-2, 2)
    ];

    return tokens.join('');
  }

}
