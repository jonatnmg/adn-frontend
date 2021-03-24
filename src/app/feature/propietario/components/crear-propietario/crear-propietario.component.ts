import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertasService } from "@core-service/alertas.service";
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR, EXITO } from "@shared/util/constantes";
import { PropietarioService } from '@propietario/shared/service/propietario.service';

const PROPIETARIO_CREADO_CORRECTAMENTE = "Propietario creado correctamente";
const LONGITUD_MINIMA_TEXTO = 3;

@Component({
  selector: 'app-crear-propietario',
  templateUrl: './crear-propietario.component.html',
})
export class CrearPropietarioComponent implements OnInit {

  propietarioForm: FormGroup;

  constructor(protected propietarioService: PropietarioService, private router: Router, protected alertasService: AlertasService) { }

  ngOnInit() {
    this.construirFormularioPropietario();
  }

  regresar(): void {
    this.router.navigate(["propietario"]);
  }

  guardarPropietario(propietarioFormulario: FormGroup) {
    this.propietarioService.guardar(propietarioFormulario.value).subscribe(
      () => {
        this.alertasService.alert(EXITO, PROPIETARIO_CREADO_CORRECTAMENTE, Iconos.SUCCESS)
        this.regresar();
      },
      (error) => {
        this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
      } 
    );
  }

  private construirFormularioPropietario() {
    this.propietarioForm = new FormGroup({
      id: new FormControl(0),
      nombre: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      numeroIdentificacion: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      telefono: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      direccion: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      correo: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)])
    });
  }

}
