import { Routes } from '@angular/router';
import { HomePageComponent } from './../pages/home-page/home-page.component';
import { ViewOnePageComponent } from './../pages/view-one-page/view-one-page.component';
import { ViewTwoPageComponent } from './../pages/view-two-page/view-two-page.component';
import { ViewThreePageComponent } from './../pages/view-three-page/view-three-page.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'view-one', component: ViewOnePageComponent },
  { path: 'view-two', component: ViewTwoPageComponent },
  { path: 'view-three', component: ViewThreePageComponent },
];
