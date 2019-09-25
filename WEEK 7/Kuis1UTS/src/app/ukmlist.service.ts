import { Injectable } from '@angular/core';
import { Ukm } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmlistService {

  private _ukm: Ukm[] = [
    new Ukm(
      'u1',
      'Basket',
      'Basket adalah UKM bla bla bla'
    ),
    new Ukm(
      'u2',
      'Drama',
      'Drama adalah UKM bla bla bla'
    ),
    new Ukm(
      'u3',
      'Voli',
      'Voli adalah UKM bla bla bla'
    ),
    new Ukm(
      'u4',
      'Futsal',
      'Futsal adalah UKM bla bla bla'
    ),
    new Ukm(
      'u5',
      'Gaming',
      'Gaming adalah UKM bla bla bla'
    ),
  ];

  private myUkms: Ukm[] = [];

  get ukm() {
    return [...this._ukm];
  }

  getUkm(id: string){
    return {...this._ukm.find(p => p.id === id)};
  }

  constructor() { }

  addToMyUkm(ukm: Ukm){
    this.myUkms.push(ukm);
  }

  removeFromMyUkm(id: string){
    this.myUkms = this.myUkms.filter(p => {
      return p.id !== id;
    })
  }

  getMyUkm(){
    return [...this.myUkms];
  }
}
