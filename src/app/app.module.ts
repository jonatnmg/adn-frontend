import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { TarifaModule } from "@tarifa/tarifa.module";
import { PropietarioModule } from "./feature/propietario/propietario.module";
import { InmuebleModule } from "@inmueble/inmueble.module";
import { PagoImpuestoPredialModule } from "@pagoimpuestopredial/pago-impuesto-predial.module";

import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    TarifaModule,
    PropietarioModule,
    InmuebleModule,
    PagoImpuestoPredialModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
