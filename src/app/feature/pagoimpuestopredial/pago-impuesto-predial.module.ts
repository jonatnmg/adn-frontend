import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PagoImpuestoPredialRoutingModule } from "@pagoimpuestopredial/pago-impuesto-predial-routing.module";
import { PagoImpuestoPredialService } from '@pagoimpuestopredial/shared/service/PagoImpuestoPredial.service';
import { ListarPagosImpuestoPredialComponent } from '@pagoimpuestopredial/components/listar-pagos-impuesto-predial/listar-pagos-impuesto-predial.component';
import { PagoImpuestoPredialComponent } from "@pagoimpuestopredial/components/pago-impuesto-predial/pago-impuesto-predial.component";
import { ConsultarPagosPendientesComponent } from "@pagoimpuestopredial/components/consultar-pagos-pendientes/consultar-pagos-pendientes.component";
import { PagarImpuestoPredialComponent } from "@pagoimpuestopredial/components/pagar-impuesto-predial/pagar-impuesto-predial.component";
import { EditarPagoImpuestoPredialComponent } from "@pagoimpuestopredial/components/editar-pago-impuesto-predial/editar-pago-impuesto-predial.component";

@NgModule({
  declarations: [
    PagoImpuestoPredialComponent,
    ListarPagosImpuestoPredialComponent,
    ConsultarPagosPendientesComponent,
    PagarImpuestoPredialComponent,
    EditarPagoImpuestoPredialComponent
  ],
  imports: [
    PagoImpuestoPredialRoutingModule,
    SharedModule
  ],
  providers: [PagoImpuestoPredialService]
})
export class PagoImpuestoPredialModule {

}
