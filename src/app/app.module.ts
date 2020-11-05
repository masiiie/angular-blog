import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BarranavComponent } from './barranav/barranav.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { IndexComponent } from './index/index.component';
import { CarruselComponent } from './carrusel/carrusel.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    BarranavComponent,
    AboutmeComponent,
    ViewpostComponent,
    IndexComponent,
    CarruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }