import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Propietario } from "@propietario/shared/model/propietario";
import { PropietarioService } from "@propietario/shared/service/propietario.service";
import { Observable } from "rxjs";
import { InmuebleService } from "../service/inmueble.service";
import { AlertasService } from '@core/services/alertas.service';
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR } from "@shared/util/constantes";

const NO_SE_ENCONTRO_PROPIETARIO = "No se encontró propietario";

@Component({
  selector: 'app-formulario-inmueble',
  templateUrl: './formulario-inmueble.component.html',
  styleUrls: ['./formulario-inmueble.component.css']
})
export class FormularioInmuebleComponent implements OnInit {

  @Input() inmuebleForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonGuardar = new EventEmitter();
  @Output() eventoBuscarPropietario = new EventEmitter();

  public listaPropietario: Observable<Propietario[]>;

  constructor(protected inmuebleService: InmuebleService,
    protected propietarioService: PropietarioService,
    private router: Router,
    protected alertasService: AlertasService) { }

  ngOnInit() {
  }

  regresar(): void {
    this.inmuebleService.inmueble = null;
    this.router.navigate(["inmueble"]);
  }

  realizarAccionBotonGuardar() {
    if (this.inmuebleForm.valid) {
      this.eventoBotonGuardar.emit(this.inmuebleForm);
    }
  }

  buscarPropietarioNumeroIdentificacion(e) {

    let numeroIdentificacion = e.target.value;
    this.propietarioService.consultarPropietarioPorNumeroIdentificacion(numeroIdentificacion).subscribe(
      (propietarios) => {

        if (propietarios.length > 0) {
          let propietario: Propietario;
          propietario = propietarios[0];

          this.inmuebleForm.get('idPropietario').setValue(propietario.id);
          this.inmuebleForm.get('nombrePropietario').setValue(propietario.nombre);

        } else {
          this.inmuebleForm.get('idPropietario').setValue(null);
          this.inmuebleForm.get('nombrePropietario').setValue(null);
          this.alertasService.alert(ERROR, NO_SE_ENCONTRO_PROPIETARIO, Iconos.ERROR);
        }

      }, (error) => { this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR); }

    );

  }

}
