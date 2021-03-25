import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from '@core/services/alertas.service';
import { PagoImpuestoPredial } from '@pagoimpuestopredial/shared/model/pagoimpuestopredial';
import { PagoImpuestoPredialService } from '@pagoimpuestopredial/shared/service/PagoImpuestoPredial.service';
import { ERROR, ADVERTENCIA } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';

const LONGITUD_MINIMA_NUMERO_PREDIAL = 3;
const NO_SE_ENCONTRARON_PAGOS_PENDIENTES = "No se encontraron pagos pendientes";


@Component({
  selector: 'app-consultar-pagos-pendientes',
  templateUrl: './consultar-pagos-pendientes.component.html',
  styleUrls: ['./consultar-pagos-pendientes.component.css']
})
export class ConsultarPagosPendientesComponent implements OnInit {

  pagosPendientesForm: FormGroup;
  listaPagosPendientes: PagoImpuestoPredial[] = [];
  titulo = "Consultar pagos pendientes";
  descuentoImpuestoPredial = 0.01;
  multaImpuestoPredial = 0.01;
  anioActual = (new Date()).getFullYear();
  tarifaPorMil = 1000;

  constructor(
    protected pagoImpuestoPredialService: PagoImpuestoPredialService,
    private router: Router,
    protected alertasService: AlertasService
  ) { }

  ngOnInit() {
    this.construirFormularioPagosPendientes();
  }

  regresar(): void {
    this.router.navigate(["/pagoimpuestopredial"]);
  }

  consultarPagosPendientes(): void {

    if (this.pagosPendientesForm.valid) {

      this.pagoImpuestoPredialService.consultarPagosPendientesPorNumeroPredial(this.pagosPendientesForm.value.numeroPredial).
        subscribe((pagosPendientes) => {

          if (pagosPendientes.length > 0) {
            this.listaPagosPendientes = pagosPendientes;

          } else {
            this.listaPagosPendientes = [];
            this.alertasService.alert(ADVERTENCIA, NO_SE_ENCONTRARON_PAGOS_PENDIENTES, Iconos.INFO);
          }

        }, (error) => {
          this.listaPagosPendientes = [];
          this.alertasService.alert(ERROR, NO_SE_ENCONTRARON_PAGOS_PENDIENTES, Iconos.ERROR);
          this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
        });

    }
  }

  private construirFormularioPagosPendientes() {
    this.pagosPendientesForm = new FormGroup({
      numeroPredial: new FormControl(222222, [Validators.required, Validators.minLength(LONGITUD_MINIMA_NUMERO_PREDIAL)])
    });
  }


  pagarImpuestoPredial(pagosPendientes: PagoImpuestoPredial) {
    this.pagoImpuestoPredialService.pagoImpuestoPredial = pagosPendientes;
    this.router.navigate(["/pagoimpuestopredial/pagar"]);
  }
  
}
