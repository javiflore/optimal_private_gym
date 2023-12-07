import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { TarifaCardComponent } from './components/shared/tarifa-card/tarifa-card.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HorarioComponent } from './components/horario/horario.component';
import { AvisosLegalesComponent } from './components/avisos-legales/avisos-legales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NavbarComponent,
    TarifasComponent,
    TarifaCardComponent,
    EquipoComponent,
    HorarioComponent,
    AvisosLegalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
