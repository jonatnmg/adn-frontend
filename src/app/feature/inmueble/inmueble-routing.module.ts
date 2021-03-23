import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearInmuebleComponent } from "@inmueble/components/crear-inmueble/crear-inmueble.component";
import { ListarInmuebleComponent } from "@inmueble/components/listar-inmueble/listar-inmueble.component";
import { EditarInmuebleComponent } from "@inmueble/components/editar-inmueble/editar-inmueble.component";
import { InmuebleComponent } from "@inmueble/components/inmueble/inmueble.component";

const routes: Routes = [
  {
    path: '',
    component: InmuebleComponent,
    children: [      
      {
        path: '',
        component: ListarInmuebleComponent
      },
      {
        path: 'crear',
        component: CrearInmuebleComponent
      },
      {
        path: 'editar',
        component: EditarInmuebleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
