import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietarioComponent } from "./components/propietario/propietario.component";
import { ListarPropietarioComponent } from "./components/listar-propietario/listar-propietario.component";
import { CrearPropietarioComponent } from "./components/crear-propietario/crear-propietario.component";
import { EditarPropietarioComponent } from "./components/editar-propietario/editar-propietario.component";


const routes: Routes = [
  {
    path: '',
    component: PropietarioComponent,
    children: [      
      {
        path: '',
        component: ListarPropietarioComponent
      },
      {
        path: 'crear',
        component: CrearPropietarioComponent
      },
      {
        path: 'editar',
        component: EditarPropietarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietarioRoutingModule { }
