import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PagoImpuestoPredial } from '@pagoimpuestopredial/shared/model/pagoimpuestopredial';
import { PagoImpuestoPredialService } from '@pagoimpuestopredial/shared/service/PagoImpuestoPredial.service';
import { AlertasService } from "@core-service/alertas.service";
import { ERROR, EXITO, CONFIRMAR, CANCELAR } from "@shared/util/constantes";
import { Iconos } from '@shared/util/iconos.enum';

const ELIMINAR_PAGO_IMPUESTO_PREDIAL = "Eliminar pago de impuesto predial";
const ELIMINADO_CORRECTAMENTE = "Pago impuesto predial eliminado";
const ESTA_SEGURO_DE_ELIMINAR_PAGO_IMPUESTO_PREDIAL = "Esta seguro de eliminar este pago impuesto predial";

@Component({
  selector: 'app-listar-pagos-impuesto-predial',
  templateUrl: './listar-pagos-impuesto-predial.component.html',
  styleUrls: ['./listar-pagos-impuesto-predial.component.css']
})
export class ListarPagosImpuestoPredialComponent implements OnInit {

  public listaPagosImpuestoPredial: Observable<PagoImpuestoPredial[]>;

  constructor(protected pagoImpuestoPredialService: PagoImpuestoPredialService,
    private router: Router,
    protected alertasService: AlertasService) { }

  ngOnInit() {
    this.listaPagosImpuestoPredial = this.pagoImpuestoPredialService.consultar();
  }

  actualizarPagoImpuestoPredial(pagoImpuestoPredial: PagoImpuestoPredial) {
    this.pagoImpuestoPredialService.pagoImpuestoPredial = pagoImpuestoPredial;
    this.router.navigate(["/pagoimpuestopredial/editar"]);
  }

  eliminarPagoImpuestoPredial(pagoImpuestoPredial: PagoImpuestoPredial) {

    this.alertasService.confirm(
      ELIMINAR_PAGO_IMPUESTO_PREDIAL,
      ESTA_SEGURO_DE_ELIMINAR_PAGO_IMPUESTO_PREDIAL,
      Iconos.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.pagoImpuestoPredialService.eliminar(pagoImpuestoPredial).subscribe(() => {
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
    this.listaPagosImpuestoPredial = this.pagoImpuestoPredialService.consultar();

    this.pagoImpuestoPredialService.pagoImpuestoPredial = null;
    this.router.navigate(["/pagoimpuestopredial"]);
  }

}
