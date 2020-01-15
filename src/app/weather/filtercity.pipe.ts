import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercity'
})
export class FiltercityPipe implements PipeTransform {

  transform(item: string, searchText: string) {
    searchText = searchText.toLowerCase();
    return item.toLowerCase().includes(searchText);
  }

}
