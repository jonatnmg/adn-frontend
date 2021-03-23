import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Propietario } from '@propietario/shared/model/propietario';
import { environment } from 'src/environments/environment';
import { Inmueble } from '../model/inmueble';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  inmueble: Inmueble
  URL_INMUEBLE = "/inmuebles";
  URL_PROPIETARIO = "/propietarios";

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Inmueble[]>(`${environment.endpoint}${this.URL_INMUEBLE}`, this.http.optsName('consultar inmuebles'));
  }

  public guardar(inmueble: Inmueble) {
    return this.http.doPost<Inmueble, boolean>(`${environment.endpoint}${this.URL_INMUEBLE}`, inmueble,
      this.http.optsName('Crear Inmueble'));
  }

  public actualizar(inmueble: Inmueble, idInmueble: number) {
    return this.http.doPut<Inmueble, boolean>(`${environment.endpoint}${this.URL_INMUEBLE}/${idInmueble}`, inmueble,
      this.http.optsName('Actualizar Inmueble'));
  }

  public eliminar(inmueble: Inmueble) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.URL_INMUEBLE}/${inmueble.id}`,
      this.http.optsName('Eliminar Inmuebles'));
  }

  public consultarPropietarioPorNumeroIdentificacion(numeroIdentificacionPropietario: string) {
    return this.http.doGet<Propietario[]>(`${environment.endpoint}${this.URL_PROPIETARIO}/${numeroIdentificacionPropietario}`, this.http.optsName('consultar propietario por numero identificacion'));
  }

}
