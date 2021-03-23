import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from "@core-service/alertas.service";
import { ERROR, EXITO, CONFIRMAR, CANCELAR } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';
import { Observable } from 'rxjs';
import { Propietario } from '../../shared/model/propietario';
import { PropietarioService } from '../../shared/service/propietario.service';

const ELIMINADO_CORRECTAMENTE = "Propietario eliminado correctamente";
const ELIMINAR_PROPIETARIO = "Eliminar propietario";
const ESTA_SEGURO_DE_ELIMINAR_PROPIETARIO = "Esta seguro de eliminar este propietario";

@Component({
  selector: 'app-listar-propietario',
  templateUrl: './listar-propietario.component.html',
  styleUrls: ['./listar-propietario.component.css']
})
export class ListarPropietarioComponent implements OnInit {
  public listaPropietario: Observable<Propietario[]>;

  constructor(protected propietarioService: PropietarioService,
    private router: Router,
    protected alertasService: AlertasService) { }

  ngOnInit() {
    this.listaPropietario = this.propietarioService.consultar();
  }

  actualizarPropietario(propietario: Propietario) {
    this.propietarioService.propietario = propietario;
    this.router.navigate(["/propietario/editar"]);
  }

  eliminarPropietario(propietario: Propietario) {

    this.alertasService.confirm(
      ELIMINAR_PROPIETARIO,
      ESTA_SEGURO_DE_ELIMINAR_PROPIETARIO,
      Iconos.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.propietarioService.eliminar(propietario).subscribe(() =>{
            this.alertasService.alert(EXITO, ELIMINADO_CORRECTAMENTE, Iconos.SUCCESS)
        }, 
          (error) => {
            this.alertasService.alert(ERROR, error.error.mensaje, Iconos.ERROR);
          }
        );
        },
      }
    );    
  }

}
