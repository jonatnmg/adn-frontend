import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PropietarioRoutingModule } from "./propietario-routing.module";
import { PropietarioComponent } from "./components/propietario/propietario.component";
import { ListarPropietarioComponent } from "./components/listar-propietario/listar-propietario.component";
import { CrearPropietarioComponent } from "./components/crear-propietario/crear-propietario.component";
import { FormularioPropietarioComponent } from "./shared/formulario-propietario/formulario-propietario.component";
import { EditarPropietarioComponent } from "./components/editar-propietario/editar-propietario.component";

@NgModule({
  imports: [
    PropietarioRoutingModule,
    SharedModule
  ],
  declarations: [
    CrearPropietarioComponent,
    EditarPropietarioComponent,
    ListarPropietarioComponent, 
    PropietarioComponent,
    FormularioPropietarioComponent
  ]
})
export class PropietarioModule { }
