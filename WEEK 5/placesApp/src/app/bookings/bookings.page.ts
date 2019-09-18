import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];

  constructor(
    private bookingService: BookingsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  deleteBooking(id: string, slidingItem: IonItemSliding){
    slidingItem.close();

    console.log(id + ': cancelled!');
    var result = this.loadedBookings.filter(function (x) {
      return x.id !== id;
    });

    this.loadedBookings = result;
  }
}
