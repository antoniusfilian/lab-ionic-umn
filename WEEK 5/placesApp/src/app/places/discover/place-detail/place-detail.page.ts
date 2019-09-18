import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  loadedPlaces: Place;

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

  async bookPlace() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons:
      [{
        text: `Book with Random Date`,
        handler: () => {
          this.modalCtrl.create({ component: CreateBookingComponent,
          componentProps: {selectedPlace: this.loadedPlaces}})
          .then(modalElement => {
            modalElement.present();
            return modalElement.onDidDismiss();
          })
          .then(resultData => {
            console.log(resultData)
          });
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    })
    await actionSheet.present();
  }

  goBack(){
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
