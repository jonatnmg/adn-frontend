import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagoImpuestoPredial } from '@pagoimpuestopredial/shared/model/pagoimpuestopredial';
import { PagoImpuestoPredialService } from '@pagoimpuestopredial/shared/service/PagoImpuestoPredial.service';
import { AlertasService } from "@core-service/alertas.service";
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR, EXITO } from "@shared/util/constantes";

const PAGO_REALIZADO_CORRECTAMENTE = "Pago realizado correctamente";

@Component({
  selector: 'app-pagar-impuesto-predial',
  templateUrl: './pagar-impuesto-predial.component.html',
  styleUrls: ['./pagar-impuesto-predial.component.css']
})
export class PagarImpuestoPredialComponent implements OnInit {
  productoForm: FormGroup;
  pagoImpuestoPredial: PagoImpuestoPredial;
  tarifaPorMil = 1000;
  descuento = 10;

  constructor(protected pagoImpuestoPredialService: PagoImpuestoPredialService,
    private router: Router,
    protected alertasService: AlertasService) {
    this.pagoImpuestoPredial = this.pagoImpuestoPredialService.pagoImpuestoPredial;
  }

  ngOnInit() {
    this.construirFormularioPagarImpuestoPredial();
  }

  private construirFormularioPagarImpuestoPredial() {

    let valorRealImpuesto = (this.pagoImpuestoPredial?.tarifa.tarifa * this.pagoImpuestoPredial?.inmueble.avaluoCatastral) / this.tarifaPorMil;

    this.productoForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      fecha: new FormControl(null, [Validators.required]),
      valorPagado: new FormControl(null, [Validators.required]),
      numeroIdentificacionPropietario: new FormControl(this.pagoImpuestoPredial?.propietario.numeroIdentificacion),
      anio: new FormControl(this.pagoImpuestoPredial?.anio),
      valorImpuestoReal: new FormControl(valorRealImpuesto),
      nombrePropietario: new FormControl(this.pagoImpuestoPredial?.propietario.nombre),
      numeroPredial: new FormControl(this.pagoImpuestoPredial?.inmueble.numeroPredial),
      direccion: new FormControl(this.pagoImpuestoPredial?.inmueble.direccion),
      idPropietario: new FormControl(this.pagoImpuestoPredial?.propietario.id),
      idInmueble: new FormControl(this.pagoImpuestoPredial?.inmueble.id),
      idTarifa: new FormControl(this.pagoImpuestoPredial?.tarifa.id),
    });
  }

  crear() {

    /*if (this.productoForm.valid) {
      console.log("validado");
*/
    this.pagoImpuestoPredialService.guardar(this.productoForm.value).subscribe(() => {
      this.alertasService.alert(EXITO, PAGO_REALIZADO_CORRECTAMENTE, Iconos.SUCCESS)
      this.regresar();
    },
      (error) => {
        this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
      });
    //}

  }

  regresar(): void {
    this.pagoImpuestoPredialService.pagoImpuestoPredial = null;
    this.router.navigate(["/pagoimpuestopredial"]);
  }

}
