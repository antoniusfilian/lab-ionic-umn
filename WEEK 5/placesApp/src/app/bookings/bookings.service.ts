import { Booking } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    new Booking(
      'b1',
      'p1',
      'u1',
      'Gading Apartment',
      12
    ),
    new Booking(
      'b2',
      'p2',
      'u2',
      'Meksiko Apartment',
      5
    ),
  ];

  get bookings(){
    return [...this._bookings];
  }

  getBookings(id: string){
    return {...this._bookings.find(p => p.id === id)};
  }
}
