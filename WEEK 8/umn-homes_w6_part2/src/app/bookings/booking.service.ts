import {Injectable} from '@angular/core';

import {Place} from '../places/place.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private myBookings: Place[] = [];

  constructor() {}

  getMyBookings() {
    return [...this.myBookings];
  }

  addToMyBookings(p: Place) {
    this.myBookings.push(p);
  }

  removeFromMyBookings(id: string) {
    this.myBookings = this.myBookings.filter((p) => {
      return p.id !== id;
    });
  }
}
