import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private placeServices: PlacesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has("placeId")){
        this.navCtrl.navigateBack('/place/tabs/offers');
        return;
      }
      this.place = this.placeServices.getPlace(paramMap.get('placeId'));
    })
  }

}
