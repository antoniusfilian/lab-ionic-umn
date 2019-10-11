import { Injectable } from '@angular/core';
import { Court } from './court.model'
@Injectable({
  providedIn: 'root'
})
export class CourtListService {

  private _court: Court[] = [
    new Court(
      'v1',
      'Galaxy Futsal',
      'https://kemananihh.files.wordpress.com/2015/01/353401_taraflexgalaxy.jpg?w=459&h=344',
      'Ancol, DKI Jakarta',
      'Futsal'
    ),
    new Court(
      'v2',
      'Cihuni Badminton Court',
      'https://serpongku.com/wp-content/uploads/2018/03/villa-melati-mas.jpg',
      'Serpong, Banten',
      'Badminton',
    ),
    new Court(
      'v3',
      'Ben\'s Stadium',
      'http://www.streetdirectory.co.id/stock_images/travel/show_resize_image.php?imageId=ind_13360389580293&w=320&h=240',
      'Bogor, Jawa Barat',
      'Futsal',
    ),
    new Court(
      'v4',
      'Candra Wijaya Intl. Badminton Center',
      'https://serpongku.com/wp-content/uploads/2018/03/chandra.jpg',
      'Serpong, Banten',
      'Badminton',
    ),
  ];

  private myCourts: Court[] = [];

  get court() {
    return [...this._court];
  }

  getCourt(id: string){
    return {...this._court.find(p => p.id === id)};
  }

  constructor() { }

  addToBooking(court: Court){
    this.myCourts.push(court);
  }

  removeFromMyBooks(id: string){
    this.myCourts = this.myCourts.filter(p => {
      return p.id !== id;
    })
  }

  getMyCourts()
  {
    return [...this.myCourts];
  }
}
