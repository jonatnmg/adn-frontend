import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietarioComponent } from "./components/propietario/propietario.component";
import { ListarPropietarioComponent } from "./components/listar-propietario/listar-propietario.component";


const routes: Routes = [
  {
    path: '',
    component: PropietarioComponent,
    children: [      
      {
        path: '',
        component: ListarPropietarioComponent
      }/*,
      {
        path: 'crear',
        component: CrearTarifaComponent
      },
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
export class PropietarioRoutingModule { }
