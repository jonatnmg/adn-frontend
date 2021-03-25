import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { PagoImpuestoPredial } from '../model/pagoimpuestopredial';


@Injectable({
  providedIn: 'root'
})
export class PagoImpuestoPredialService {

  pagoImpuestoPredial: PagoImpuestoPredial;
  private URL_PAGO_IMPUESTO_PREDIAL = "/pagos";
  private URL_PAGOS_PENDIENTES = "/pendientes";

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<PagoImpuestoPredial[]>(`${environment.endpoint}${this.URL_PAGO_IMPUESTO_PREDIAL}`, this.http.optsName('consultar pago impuesto predial'));
  }

  public guardar(pagoImpuestoPredial: PagoImpuestoPredial) {
    return this.http.doPost<PagoImpuestoPredial, boolean>(`${environment.endpoint}${this.URL_PAGO_IMPUESTO_PREDIAL}`, pagoImpuestoPredial,
      this.http.optsName('Crear PagoImpuestoPredial'));
  }

  public actualizar(pagoImpuestoPredial: PagoImpuestoPredial, idPagoImpuestoPredial: number) {
    return this.http.doPut<PagoImpuestoPredial, boolean>(`${environment.endpoint}${this.URL_PAGO_IMPUESTO_PREDIAL}/${idPagoImpuestoPredial}`, pagoImpuestoPredial,
      this.http.optsName('Actualizar PagoImpuestoPredial'));
  }

  public eliminar(pagoImpuestoPredial: PagoImpuestoPredial) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.URL_PAGO_IMPUESTO_PREDIAL}/${pagoImpuestoPredial.id}`,
      this.http.optsName('Eliminar PagoImpuestoPredial'));
  }

  public consultarPagosPendientesPorNumeroPredial(numeroPredial: string) {
    return this.http.doGet<PagoImpuestoPredial[]>(`${environment.endpoint}${this.URL_PAGO_IMPUESTO_PREDIAL}${this.URL_PAGOS_PENDIENTES}/${numeroPredial}`, this.http.optsName('pagos pendientes'));
  }

}
