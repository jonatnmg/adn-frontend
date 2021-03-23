import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTarifaComponent } from './components/listar-tarifa/listar-tarifa.component'
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { CrearTarifaComponent } from "@tarifa/components/crear-tarifa/crear-tarifa.component";

const routes: Routes = [
  {
    path: '',
    component: TarifaComponent,
    children: [
      {
        path: 'crear',
        component: CrearTarifaComponent
      },
      {
        path: 'listar',
        component: ListarTarifaComponent
      },
      {
        path: 'editar',
        component: CrearTarifaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifaRoutingModule { }
