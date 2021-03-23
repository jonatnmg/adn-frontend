import { NgModule } from '@angular/core';

import { TarifaRoutingModule } from "@tarifa/tarifa-routing.module";
import { SharedModule } from '@shared/shared.module';
import { TarifaService } from './shared/service/tarifa.service';
import { TarifaComponent } from "@tarifa/components/tarifa/tarifa.component";
import { ListarTarifaComponent } from '@tarifa/components/listar-tarifa/listar-tarifa.component';
import { FormularioTarifaComponent } from "@tarifa/shared/formulario-tarifa/formulario-tarifa.component";
import { CrearTarifaComponent } from "@tarifa/components/crear-tarifa/crear-tarifa.component";
import { EditarTarifaComponent } from "@tarifa/components/editar-tarifa/editar-tarifa.component";

@NgModule({
  declarations: [
    CrearTarifaComponent,
    ListarTarifaComponent,
    TarifaComponent,
    FormularioTarifaComponent,
    EditarTarifaComponent
  ],
  imports: [
    TarifaRoutingModule,
    SharedModule
  ],
  providers: [TarifaService]
})
export class TarifaModule { }
