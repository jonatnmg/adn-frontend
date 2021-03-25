import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagoImpuestoPredial } from '@pagoimpuestopredial/shared/model/pagoimpuestopredial';
import { PagoImpuestoPredialService } from '@pagoimpuestopredial/shared/service/PagoImpuestoPredial.service';
import { AlertasService } from "@core-service/alertas.service";
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR, EXITO } from "@shared/util/constantes";

const PAGO_EDITADO_CORRECTAMENTE = "Pago editado correctamente";

@Component({
  selector: 'app-editar-pago-impuesto-predial',
  templateUrl: './editar-pago-impuesto-predial.component.html',
  styleUrls: ['./editar-pago-impuesto-predial.component.css']
})
export class EditarPagoImpuestoPredialComponent implements OnInit {
  
  productoForm: FormGroup;
  pagoImpuestoPredial: PagoImpuestoPredial;
  tarifaPorMil = 1000;
  descuento =10;

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
      id: new FormControl(this.pagoImpuestoPredial?.id, [Validators.required]),
      fecha: new FormControl(this.pagoImpuestoPredial?.fecha, [Validators.required]),
      valorPagado: new FormControl(this.pagoImpuestoPredial?.valorPagado, [Validators.required]),
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

  editar() {

    /*if (this.productoForm.valid) {
      console.log("validado");
*/
    this.pagoImpuestoPredialService.actualizar(this.productoForm.value, this.pagoImpuestoPredial.id).subscribe(() => {
      this.alertasService.alert(EXITO, PAGO_EDITADO_CORRECTAMENTE, Iconos.SUCCESS)
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
