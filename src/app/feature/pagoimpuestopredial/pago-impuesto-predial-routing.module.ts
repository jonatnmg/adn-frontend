import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoImpuestoPredialComponent } from "@pagoimpuestopredial/components/pago-impuesto-predial/pago-impuesto-predial.component";
import { ListarPagosImpuestoPredialComponent } from "@pagoimpuestopredial/components/listar-pagos-impuesto-predial/listar-pagos-impuesto-predial.component";
import { ConsultarPagosPendientesComponent } from "@pagoimpuestopredial/components/consultar-pagos-pendientes/consultar-pagos-pendientes.component";

const routes: Routes = [
  {
    path: '',
    component: PagoImpuestoPredialComponent,
    children: [
      {
        path: '',
        component: ListarPagosImpuestoPredialComponent
      },
      {
        path: 'consultar',
        component: ConsultarPagosPendientesComponent
      }/*,
      {
        path: 'pagar',
        component: PagarImpuestoPredialComponent
      }/*,
      {
        path: 'editar',
        component: EditarTarifaComponent
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoImpuestoPredialRoutingModule { }
