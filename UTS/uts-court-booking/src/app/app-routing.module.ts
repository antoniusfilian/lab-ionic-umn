import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
  },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'my-booking', loadChildren: './my-booking/my-booking.module#MyBookingPageModule' },
  { path: 'browse', loadChildren: './home/browse/browse.module#BrowsePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
