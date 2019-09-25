import { UkmlistService } from './../ukmlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(private ukmService : UkmlistService) { }

  myUkms = [];

  ngOnInit() {
    this.myUkms = this.ukmService.getMyUkm();
  }

  ionViewWillEnter(){
    this.myUkms = this.ukmService.getMyUkm();
  }

  onCancelMyUkm(id: string){
    this.ukmService.removeFromMyUkm(id);
    this.myUkms = this.ukmService.getMyUkm();
  }

}
