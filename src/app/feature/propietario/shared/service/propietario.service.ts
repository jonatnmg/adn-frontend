import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Propietario } from '../model/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  propietario: Propietario;
  private URL_PROPIETARIO = "/propietarios";

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Propietario[]>(`${environment.endpoint}${this.URL_PROPIETARIO}`, this.http.optsName('consultar propietarios'));
  }

  public guardar(propietario: Propietario) {
    return this.http.doPost<Propietario, boolean>(`${environment.endpoint}${this.URL_PROPIETARIO}`, propietario,
      this.http.optsName('Crear Propietario'));
  }

  public actualizar(propietario: Propietario, idPropietario: number) {
    return this.http.doPut<Propietario, boolean>(`${environment.endpoint}${this.URL_PROPIETARIO}/${idPropietario}`, propietario,
      this.http.optsName('Actualizar Propietario'));
  }

  public eliminar(propietario: Propietario) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.URL_PROPIETARIO}/${propietario.id}`,
      this.http.optsName('Eliminar Propietarios'));
  }

  public consultarPropietarioPorNumeroIdentificacion(numeroIdentificacionPropietario: string) {
    return this.http.doGet<Propietario[]>(`${environment.endpoint}${this.URL_PROPIETARIO}/${numeroIdentificacionPropietario}`, this.http.optsName('listar propietario por numero identificacion'));
  }
}
