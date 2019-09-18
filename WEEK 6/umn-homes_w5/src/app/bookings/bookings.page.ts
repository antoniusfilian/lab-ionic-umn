import { IonItemSliding } from '@ionic/angular';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.getbookings();
  }

  onCancel(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
  }

}
