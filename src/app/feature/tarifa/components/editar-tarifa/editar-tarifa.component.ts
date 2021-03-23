import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarifa } from '@tarifa/shared/model/tarifa';
import { TarifaService } from '@tarifa/shared/service/tarifa.service';
import { AlertasService } from "@core-service/alertas.service";
import { ERROR, EXITO } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';

const LONGITUD_MINIMA_ANIO = 4;
const TARIFA_ACTUALIZADA_CORRECTAMENTE = "Tarifa actualizada correctamente";

@Component({
  selector: 'app-editar-tarifa',
  templateUrl: './editar-tarifa.component.html'
})
export class EditarTarifaComponent implements OnInit {

  tarifaForm: FormGroup;
  tarifa: Tarifa;

  constructor(protected tarifaService: TarifaService, private router: Router, protected alertasService: AlertasService) {
    this.tarifa = this.tarifaService.tarifa;
  }

  ngOnInit() {
    this.construirFormularioTarifa();
  }

  private construirFormularioTarifa() {
    this.tarifaForm = new FormGroup({
      avaluoMinimo: new FormControl(this.tarifa?.avaluoMinimo, Validators.required),
      avaluoMaximo: new FormControl(this.tarifa?.avaluoMaximo, Validators.required),
      tarifa: new FormControl(this.tarifa?.tarifa, Validators.required),
      anio: new FormControl(this.tarifa?.anio, [Validators.required, Validators.minLength(LONGITUD_MINIMA_ANIO)])
    });
  }

  actualizar(tarifaFormulario: FormGroup) {
    this.tarifaService.actualizar(tarifaFormulario.value, this.tarifa.id)
      .subscribe(() => {
        this.alertasService.alert(EXITO, TARIFA_ACTUALIZADA_CORRECTAMENTE, Iconos.SUCCESS)
        this.regresar();
      },
        (error) => {
          this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
        }
      )
  }

  regresar(): void {
    this.tarifaService.tarifa = null;
    this.router.navigate(["/tarifa"]);
  }

}
