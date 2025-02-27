import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private loadingCtrl: LoadingController) { }

  isLoading: boolean;

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging in . . .'}).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    });
    this.authService.login();
  }
}
