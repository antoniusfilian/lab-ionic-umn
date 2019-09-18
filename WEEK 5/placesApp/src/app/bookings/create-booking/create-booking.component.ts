import { ModalController, LoadingController, NavController, ActionSheetController } from '@ionic/angular';
import { Place } from './../../places/place.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/places/places.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  loadedPlaces: Place;

  @Input() selectedPlace: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')){ return; }
        this.loadedPlaces = this.placesService.getPlaces(paramMap.get('placeId'));
      }
    );
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  bookPlace() {
    this.loadingCtrl
    .create({
      keyboardClose: true,
      message: 'Booking the place ...'
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.modalCtrl.dismiss( {message: 'Booked!' },
        'confirm');
      }, 2000);
    });
  }
}