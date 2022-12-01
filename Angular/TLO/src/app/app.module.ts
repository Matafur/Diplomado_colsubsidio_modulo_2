import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GenersComponent } from './components/geners/geners.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card/card.component';
import { PruebaComponent } from './components/prueba/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenersComponent,
    CarruselComponent,
    FooterComponent,
    CardComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
