import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../models/filter';
import { isEmpty } from 'rxjs/operators';
import { Character } from '../models/character';

@Pipe({
    name: 'customFilter',
    pure: false
})
export class CustomPipe implements PipeTransform {
    transform(items: Character[], filter: Filter): any {
        if (!items || Object.keys(filter).length === 0) {
            return items;
        }
        let itemsFiltered = items;
        if (filter.gender) {
            itemsFiltered = items.filter(item => item.gender === filter.gender);
        }
        if (filter.eyeColor) {
            itemsFiltered = itemsFiltered.filter(item => item.eyeColor === filter.eyeColor);
        }
        if (filter.movie) {
            itemsFiltered = itemsFiltered.filter(item => item.films.includes(filter.movie));
        }
        return itemsFiltered;
    }
}