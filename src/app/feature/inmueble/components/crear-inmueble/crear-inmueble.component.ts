import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertasService } from '@core/services/alertas.service';
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR, EXITO } from "@shared/util/constantes";
import { InmuebleService } from '@inmueble/shared/service/inmueble.service';

const LONGITUD_MINIMA_TEXTO = 3;
const INMUEBLE_CREADO_CORRECTAMENTE = "Inmueble creado correctamente";

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  inmuebleForm: FormGroup;

  constructor(protected inmuebleService: InmuebleService,
    private router: Router,
    protected alertasService: AlertasService
  ) { }

  ngOnInit() {
    this.construirFormularioInmueble();
  }

  private construirFormularioInmueble() {
    this.inmuebleForm = new FormGroup({
      id: new FormControl(0),
      numeroPredial: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      direccion: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      areaTotal: new FormControl(null, Validators.required),
      areaConstruida: new FormControl(null, Validators.required),
      avaluoCatastral: new FormControl(null, Validators.required),
      numeroIdentificacionPropietario: new FormControl(2456789, Validators.required),
      nombrePropietario: new FormControl("Propietario3", Validators.required),
      idPropietario: new FormControl(3, Validators.required)
    });
  }

  guardarInmueble(inmuebleFormulario: FormGroup) {
    this.inmuebleService.guardar(inmuebleFormulario.value).subscribe(
      () => {
        this.alertasService.alert(EXITO, INMUEBLE_CREADO_CORRECTAMENTE, Iconos.SUCCESS)
        this.regresar();
      },
      (error) => {
        this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
      }
    );
  }

  regresar(): void {
    this.router.navigate(["inmueble"]);
  }

}
