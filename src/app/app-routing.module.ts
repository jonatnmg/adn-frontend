import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'tarifa', loadChildren: () => import('@tarifa/tarifa.module').then(mod => mod.TarifaModule) },
  { path: 'propietario', loadChildren: () => import('@propietario/propietario.module').then(mod => mod.PropietarioModule) },
  { path: 'inmueble', loadChildren: () => import('@inmueble/inmueble.module').then(mod => mod.InmuebleModule) },
  { path: 'pagoimpuestopredial', loadChildren: () => import('@pagoimpuestopredial/pago-impuesto-predial.module').then(mod => mod.PagoImpuestoPredialModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
