import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchterm: any): any {
  return value.filter(function(search){
   return search.name.toLowerCase().indexOf(searchterm.toLowerCase())>-1
  })
  }

}
