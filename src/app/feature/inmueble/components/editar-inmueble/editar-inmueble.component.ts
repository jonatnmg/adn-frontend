import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertasService } from '@core/services/alertas.service';
import { Iconos } from '@shared/util/iconos.enum';
import { ERROR, EXITO } from "@shared/util/constantes";
import { InmuebleService } from '@inmueble/shared/service/inmueble.service';
import { Inmueble } from '@inmueble/shared/model/inmueble';


const LONGITUD_MINIMA_TEXTO = 3;
const LONGITUD_MINIMA_NUMERO_IDENTIFICACION = 6;
const INMUEBLE_MODIFICADO_CORRECTAMENTE = "Inmueble modificado correctamente";

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {

  inmuebleForm: FormGroup;
  inmueble: Inmueble;

  constructor(protected inmuebleService: InmuebleService,
    private router: Router,
    protected alertasService: AlertasService) { 
      this.inmueble = this.inmuebleService.inmueble;
      console.log(this.inmueble);
      
    }

  ngOnInit() {
    this.construirFormularioInmueble();
  }

  private construirFormularioInmueble() {
    console.log("Inmueble", this.inmueble);
    
    this.inmuebleForm = new FormGroup({
      id: new FormControl(this.inmueble?.id),
      numeroPredial: new FormControl(this.inmueble?.numeroPredial, [Validators.required, Validators.minLength(LONGITUD_MINIMA_NUMERO_IDENTIFICACION)]),
      direccion: new FormControl(this.inmueble?.direccion, [Validators.required, Validators.minLength(LONGITUD_MINIMA_TEXTO)]),
      areaTotal: new FormControl(this.inmueble?.areaTotal, Validators.required),
      areaConstruida: new FormControl(this.inmueble?.areaConstruida, Validators.required),
      avaluoCatastral: new FormControl(this.inmueble?.avaluoCatastral, Validators.required),
      numeroIdentificacionPropietario: new FormControl(this.inmueble?.propietario.numeroIdentificacion, Validators.required),
      nombrePropietario: new FormControl(this.inmueble?.propietario.nombre, Validators.required),
      idPropietario: new FormControl(this.inmueble?.propietario.id, Validators.required)
    });
  }

  actualizarInmueble(inmuebleFormulario: FormGroup) {
    this.inmuebleService.actualizar(inmuebleFormulario.value, this.inmueble.id)
      .subscribe(() => {
        this.alertasService.alert(EXITO, INMUEBLE_MODIFICADO_CORRECTAMENTE, Iconos.SUCCESS)
        this.regresar();
      },
        (error) => {
          this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
        }
      )
  }

  regresar(): void {
    this.inmuebleService.inmueble = null;
    this.router.navigate(["/inmueble"]);
  }

}
