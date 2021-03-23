import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Tarifa } from "../model/tarifa";

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  tarifa: Tarifa;
  URL_TARIFAS = '/tarifas';

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Tarifa[]>(`${environment.endpoint}${this.URL_TARIFAS}`, this.http.optsName('consultar tarifas'));
  }

  public guardar(tarifa: Tarifa) {
    return this.http.doPost<Tarifa, boolean>(`${environment.endpoint}${this.URL_TARIFAS}`, tarifa,
      this.http.optsName('Crear Tarifa'));
  }

  public actualizar(tarifa: Tarifa, idTarifa: number) {
    return this.http.doPut<Tarifa, boolean>(`${environment.endpoint}${this.URL_TARIFAS}/${idTarifa}`, tarifa,
      this.http.optsName('Actualizar Tarifa'));
  }

  public eliminar(tarifa: Tarifa) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.URL_TARIFAS}/${tarifa.id}`,
      this.http.optsName('Eliminar Tarifas'));
  }

}
