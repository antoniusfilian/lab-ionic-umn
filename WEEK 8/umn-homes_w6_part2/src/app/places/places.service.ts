import {Injectable} from '@angular/core';

import {Place} from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      100000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'http://static3.businessinsider.com/image/5681799ce6183e55008b526d',
      125000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'https://investproperti.com/wp-content/uploads/2017/07/casa-de-parco-bsd-apartment.jpg',
      50000000,
      new Date('2019-01-01'),
      new Date('2020-12-31'),
    ),
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {
      ...this._places.find((p) => p.id === id),
    };
  }

  constructor() {}
}
