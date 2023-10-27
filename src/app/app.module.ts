import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ViewOnePageComponent } from './pages/view-one-page/view-one-page.component';
import { ViewTwoPageComponent } from './pages/view-two-page/view-two-page.component';
import { ViewThreePageComponent } from './pages/view-three-page/view-three-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { router } from './router/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewOnePageComponent,
    ViewTwoPageComponent,
    ViewThreePageComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(router)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
