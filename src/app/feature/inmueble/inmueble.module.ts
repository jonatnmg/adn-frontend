import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InmuebleRoutingModule } from "@inmueble/inmueble-routing.module";
import { CrearInmuebleComponent } from "@inmueble/components/crear-inmueble/crear-inmueble.component";
import { EditarInmuebleComponent } from "@inmueble/components/editar-inmueble/editar-inmueble.component";
import { ListarInmuebleComponent } from "@inmueble/components/listar-inmueble/listar-inmueble.component";
import { InmuebleComponent } from "@inmueble/components/inmueble/inmueble.component";
import { FormularioInmuebleComponent } from "@inmueble/shared/formulario-inmueble/formulario-inmueble.component";

@NgModule({
  imports: [
    InmuebleRoutingModule,
    SharedModule
  ],
  declarations: [
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    ListarInmuebleComponent,
    InmuebleComponent,
    FormularioInmuebleComponent
  ]
})
export class InmuebleModule { }
