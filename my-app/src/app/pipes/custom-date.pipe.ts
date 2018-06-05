import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    let date = new Date(value);
    let result;
    switch(format){
      case 'full':
        result = date.toLocaleDateString(locale, {weekday:'long', year:'numeric', month: 'long', day:'numeric', hour:'numeric'});
        break;
      case 'short':
        result = date.toLocaleDateString(locale, {weekday:'short', year:'numeric', month: 'short', day:'numeric', hour:'numeric'});
        break;
      default:
        result = date.toLocaleDateString(locale);
        break;
    }
    return null;
  }

}
