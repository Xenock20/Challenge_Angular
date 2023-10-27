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
import { NgxMaskModule } from 'ngx-mask';
import { IgxGridModule, IgxButtonGroupModule } from 'igniteui-angular';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewOnePageComponent,
    ViewTwoPageComponent,
    ViewThreePageComponent,
    NavBarComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    NgxMaskModule.forRoot(),
    IgxGridModule,
    IgxButtonGroupModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
