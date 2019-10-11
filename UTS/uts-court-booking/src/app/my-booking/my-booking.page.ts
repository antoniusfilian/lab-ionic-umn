import { CourtListService } from 'src/app/courtlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.page.html',
  styleUrls: ['./my-booking.page.scss'],
})
export class MyBookingPage implements OnInit {

  constructor(
    private appService: CourtListService
  ) { }

  myBooks : any;
  empty = true;

  ngOnInit() {
    this.myBooks = this.appService.getMyCourts();
    if (this.myBooks.length === 0){
      this.empty = true;
    } else {
      this.empty = false;
    }
  }

  onCancelMyBooking(id: string){
    this.appService.removeFromMyBooks(id);
    this.myBooks = this.appService.getMyCourts();
    if (this.myBooks.length === 0){
      this.empty = true;
    } else {
      this.empty = false;
    }
  }

}
