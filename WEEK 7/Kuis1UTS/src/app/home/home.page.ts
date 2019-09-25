import { UkmlistService } from './../ukmlist.service';
import { Component } from '@angular/core';
import { Ukm } from '../ukm.model';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedUkm = [];
  loadedUKM: Ukm[];

  constructor(
    private appService: UkmlistService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadedUKM = this.appService.ukm;
  }

  async presentAlert(ukm: Ukm){
    const alert = await this.alertController.create({
      header: "Beneran Mau Join?",
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => {
            this.appService.addToMyUkm(ukm)
          }
        },
      ]
    });
    await alert.present();
  }

}
