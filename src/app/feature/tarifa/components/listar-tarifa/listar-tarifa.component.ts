import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { TarifaService } from "@tarifa/shared/service/tarifa.service";
import { Tarifa } from "@tarifa/shared/model/tarifa";
import { AlertasService } from "@core-service/alertas.service";
import { ERROR, EXITO, CONFIRMAR, CANCELAR } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';


const ELIMINADO_CORRECTAMENTE = "Eliminado correctamente";
const ELIMINAR_TARIFA = "Eliminar tarifa";
const ESTA_SEGURO_DE_ELIMINAR_TARIFA = "Esta seguro de eliminar esta tarifa";

@Component({
  selector: 'app-listar-tarifa',
  templateUrl: './listar-tarifa.component.html',
  styleUrls: ['./listar-tarifa.component.css']
})
export class ListarTarifaComponent implements OnInit {

  public listarTarifas: Observable<Tarifa[]>;

  constructor(protected tarifaService: TarifaService, private router: Router, protected alertasService: AlertasService) { }

  ngOnInit() {
    this.listarTarifas = this.tarifaService.consultar();
  }

  actualizarTarifa(tarifa: Tarifa) {
    this.tarifaService.tarifa = tarifa;
    this.router.navigate(["/tarifa/editar"]);
  }

  eliminarTarifa(tarifa: Tarifa) {

    this.alertasService.confirm(
      ELIMINAR_TARIFA,
      ESTA_SEGURO_DE_ELIMINAR_TARIFA,
      Iconos.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.tarifaService.eliminar(tarifa).subscribe(() =>{
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
    this.listarTarifas = this.tarifaService.consultar();
    
    this.tarifaService.tarifa = null;
    this.router.navigate(["/tarifa"]);
  }

}
