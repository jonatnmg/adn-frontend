import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PagoImpuestoPredialRoutingModule } from "@pagoimpuestopredial/pago-impuesto-predial-routing.module";
import { PagoImpuestoPredialService } from '@pagoimpuestopredial/shared/service/PagoImpuestoPredial.service';
import { ListarPagosImpuestoPredialComponent } from '@pagoimpuestopredial/components/listar-pagos-impuesto-predial/listar-pagos-impuesto-predial.component';
import { PagoImpuestoPredialComponent } from "@pagoimpuestopredial/components/pago-impuesto-predial/pago-impuesto-predial.component";
import { ConsultarPagosPendientesComponent } from "@pagoimpuestopredial/components/consultar-pagos-pendientes/consultar-pagos-pendientes.component";

@NgModule({
  declarations: [
    PagoImpuestoPredialComponent,
    ListarPagosImpuestoPredialComponent,
    ConsultarPagosPendientesComponent
  ],
  imports: [
    PagoImpuestoPredialRoutingModule,
    SharedModule
  ],
  providers: [PagoImpuestoPredialService]
})
export class PagoImpuestoPredialModule {

}
