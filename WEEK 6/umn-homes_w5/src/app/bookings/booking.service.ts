import { Booking } from './../../../../../WEEK 5/placesApp/src/app/bookings/booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _bookings: Booking[] = [
    {
      id: 'b1',
      placeId: 'p1',
      placeTitle: 'Ruko Bolsena',
      guestNumber: 2,
      userId: 'abc'
    },
    {
      id: 'b2',
      placeId: 'p2',
      placeTitle: 'Scientia Residence',
      guestNumber: 8,
      userId: 'abc'
    }
  ];

  constructor() { }

  getbookings(){
    return [...this._bookings];
  }
}
