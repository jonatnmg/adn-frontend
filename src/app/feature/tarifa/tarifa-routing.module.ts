import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTarifaComponent } from './components/listar-tarifa/listar-tarifa.component'
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { CrearTarifaComponent } from "@tarifa/components/crear-tarifa/crear-tarifa.component";
import { EditarTarifaComponent } from './components/editar-tarifa/editar-tarifa.component';

const routes: Routes = [
  {
    path: '',
    component: TarifaComponent,
    children: [      
      {
        path: '',
        component: ListarTarifaComponent
      },
      {
        path: 'crear',
        component: CrearTarifaComponent
      },
      {
        path: 'editar',
        component: EditarTarifaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifaRoutingModule { }
