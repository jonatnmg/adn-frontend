import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoImpuestoPredialComponent } from "@pagoimpuestopredial/components/pago-impuesto-predial/pago-impuesto-predial.component";
import { ListarPagosImpuestoPredialComponent } from "@pagoimpuestopredial/components/listar-pagos-impuesto-predial/listar-pagos-impuesto-predial.component";
import { ConsultarPagosPendientesComponent } from "@pagoimpuestopredial/components/consultar-pagos-pendientes/consultar-pagos-pendientes.component";
import { PagarImpuestoPredialComponent } from "@pagoimpuestopredial/components/pagar-impuesto-predial/pagar-impuesto-predial.component";
import { EditarPagoImpuestoPredialComponent } from "@pagoimpuestopredial/components/editar-pago-impuesto-predial/editar-pago-impuesto-predial.component";

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
      },
      {
        path: 'pagar',
        component: PagarImpuestoPredialComponent
      },
      {
        path: 'editar',
        component: EditarPagoImpuestoPredialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoImpuestoPredialRoutingModule { }
