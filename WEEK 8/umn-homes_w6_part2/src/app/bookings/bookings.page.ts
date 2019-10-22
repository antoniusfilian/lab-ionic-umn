import {Component, OnInit} from '@angular/core';

import {Booking} from './booking.model';
import {BookingService} from './booking.service';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  myBookings = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  ionViewWillEnter() {
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  onCancelMyBooking(id: string) {
    this.bookingService.removeFromMyBookings(id);
    this.myBookings = this.bookingService.getMyBookings();
  }
}
