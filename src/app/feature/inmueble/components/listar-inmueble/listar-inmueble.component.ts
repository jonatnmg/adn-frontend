import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from "@core-service/alertas.service";
import { ERROR, EXITO, CONFIRMAR, CANCELAR } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';
import { Inmueble } from '@inmueble/shared/model/inmueble';
import { InmuebleService } from '@inmueble/shared/service/inmueble.service';
import { Observable } from 'rxjs';


const ELIMINADO_CORRECTAMENTE = "Inmueble eliminado correctamente";
const ELIMINAR_INMUEBLE = "Eliminar inmueble";
const ESTA_SEGURO_DE_ELIMINAR_INMUEBLE = "Esta seguro de eliminar este inmueble";

@Component({
  selector: 'app-listar-inmueble',
  templateUrl: './listar-inmueble.component.html',
  styleUrls: ['./listar-inmueble.component.css']
})
export class ListarInmuebleComponent implements OnInit {

  public listaInmuebles: Observable<Inmueble[]>;

  constructor(protected inmuebleService: InmuebleService,
    private router: Router,
    protected alertasService: AlertasService) { }

  ngOnInit() {
    this.listaInmuebles = this.inmuebleService.consultar()
  }

  eliminarInmueble(inmueble: Inmueble) {

    this.alertasService.confirm(
      ELIMINAR_INMUEBLE,
      ESTA_SEGURO_DE_ELIMINAR_INMUEBLE,
      Iconos.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.inmuebleService.eliminar(inmueble).subscribe(() =>{
            this.alertasService.alert(EXITO, ELIMINADO_CORRECTAMENTE, Iconos.SUCCESS);
            this.regresar();
        }, 
          (error) => {
            this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
          }
        );
        },
      }
    );    
  }

  regresar(): void {
    this.listaInmuebles = this.inmuebleService.consultar();
    this.inmuebleService.inmueble = null;
    this.router.navigate(["/inmueble"]);
  }

}
