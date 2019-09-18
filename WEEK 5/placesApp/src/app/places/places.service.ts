import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'http://www.desertsun.co.uk/blog/images/Apartment%201.jpg',
      1000000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartment Romantis',
      'https://d3p0bla3numw14.cloudfront.net/news-content/img/2017/01/16110710/perspektif-dan-stasiun-cisauk-OK.jpg',
      100002143123400000
    ),
    new Place(
      'p1',
      'BSD Apartment',
      'Apartment Murah',
      'http://cdn2.tstatic.net/wartakota/foto/bank/images/20180131-serpong-garden-apartment-005_20180131_111553.jpg',
      100000000112312314230
    ),
  ];

  get places(){
    return [...this._places];
  }

  getPlaces(id: string){
    var recipe = [... this._places]
    var obj = recipe.find(o => o.id === id);

    return obj;
  }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)}
  }
}
