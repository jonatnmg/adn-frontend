import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PropietarioRoutingModule } from "./propietario-routing.module";
import { PropietarioComponent } from "./components/propietario/propietario.component";
import { ListarPropietarioComponent } from "./components/listar-propietario/listar-propietario.component";

@NgModule({
  imports: [
    PropietarioRoutingModule,
    SharedModule
  ],
  declarations: [ListarPropietarioComponent, PropietarioComponent ]
})
export class PropietarioModule { }
