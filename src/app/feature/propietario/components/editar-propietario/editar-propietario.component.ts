import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { Propietario } from '@propietario/shared/model/propietario';
import { PropietarioService } from '@propietario/shared/service/propietario.service';
import { AlertasService } from "@core-service/alertas.service";
import { ERROR, EXITO } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';

const PROPIETARIO_MODIFICADO_CORRECTAMENTE = "Propietario modificado correctamente";
const LONGITUD_MINIMA_TEXTO = 3;

@Component({
  selector: 'app-editar-propietario',
  templateUrl: './editar-propietario.component.html'
})
export class EditarPropietarioComponent implements OnInit {

  propietarioForm: FormGroup;
  propietario: Propietario;

  constructor(protected propietarioService: PropietarioService, private router: Router, protected alertasService: AlertasService) {
    this.propietario = this.propietarioService.propietario;
  }

  ngOnInit() {
    this.construirFormularioPropietario();
  }

  private construirFormularioPropietario() {
    this.propietarioForm = new FormGroup({
      nombre: new FormControl(this.propietario?.nombre, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      numeroIdentificacion: new FormControl(this.propietario?.numeroIdentificacion, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      telefono: new FormControl(this.propietario?.telefono, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      direccion: new FormControl(this.propietario?.direccion, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      correo: new FormControl(this.propietario?.correo, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)])
    });
  }

  actualizarPropietario(propietarioFormulario: FormGroup) {
    this.propietarioService.actualizar(propietarioFormulario.value, this.propietario.id)
      .subscribe(() => {
        this.alertasService.alert(EXITO, PROPIETARIO_MODIFICADO_CORRECTAMENTE, Iconos.SUCCESS)
        this.regresar();
      },
        (error) => {
          this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
        }
      )
  }

  regresar(): void {
    this.propietarioService.propietario = null;
    this.router.navigate(["/propietario"]);
  }

}
