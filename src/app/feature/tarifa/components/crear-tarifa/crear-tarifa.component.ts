import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TarifaService } from '@tarifa/shared/service/tarifa.service';
import { Router } from "@angular/router";
import { AlertasService } from "@core-service/alertas.service";
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR, EXITO } from "@shared/util/constantes";

const LONGITUD_MINIMA_ANIO = 4;
const TARIFA_CREADA_CORRECTAMENTE = "Tarifa creada correctamente";

@Component({
  selector: 'app-crear-tarifa',
  templateUrl: './crear-tarifa.component.html',
  styleUrls: ['./crear-tarifa.component.css']
})
export class CrearTarifaComponent implements OnInit {

  tarifaForm: FormGroup;
  constructor(protected tarifaService: TarifaService, private router: Router, protected alertasService: AlertasService) { }

  ngOnInit() {
    this.construirFormularioTarifa();
  }

  regresar(): void {
    this.router.navigate(["tarifa"]);
  }

  guardarTarifa(tarifaFormulario: FormGroup) {
    this.tarifaService.guardar(tarifaFormulario.value).subscribe(
      () => {
        this.alertasService.alert(EXITO, TARIFA_CREADA_CORRECTAMENTE, Iconos.SUCCESS)
        this.regresar();
      },
      (error) => {
        this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
      } 
    );
  }

  private construirFormularioTarifa() {
    this.tarifaForm = new FormGroup({
      id: new FormControl(0),
      avaluoMinimo: new FormControl(null, Validators.required),
      avaluoMaximo: new FormControl(null, Validators.required),
      tarifa: new FormControl(null, Validators.required),
      anio: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_ANIO)])
    });
  }

}
