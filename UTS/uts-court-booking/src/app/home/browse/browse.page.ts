import { Court } from './../../court.model';
import { Component, OnInit } from '@angular/core';
import { CourtListService } from 'src/app/courtlist.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  loadedCourts: Court[];

  constructor(
    private courtService: CourtListService,
    private alertController: AlertController,
    private appService: CourtListService
  ) { }

  ngOnInit() {
    this.loadedCourts = this.courtService.court;
  }

  async presentAlert(court: Court){
    const alert = await this.alertController.create({
      header: 'Book Venue',
      message: 'Are you sure you want to book this venue?',
      buttons: [
        {
          text: 'YES',
          handler: () => {
            this.appService.addToBooking(court);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
      ]
    });
    await alert.present();
  }

}
