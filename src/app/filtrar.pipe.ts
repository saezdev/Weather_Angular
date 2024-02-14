import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarPorPatron',
  standalone: true
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any[], patron:string): any[] {
    if (value && value.length)
      return value.filter(a => a.name.toLowerCase().includes(patron.toLowerCase().trim()));
    else
      return [];
  }

}
