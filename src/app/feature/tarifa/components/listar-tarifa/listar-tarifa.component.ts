import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { TarifaService } from "@tarifa/shared/service/tarifa.service";
import { Tarifa } from "@tarifa/shared/model/tarifa";



@Component({
  selector: 'app-listar-tarifa',
  templateUrl: './listar-tarifa.component.html',
  styleUrls: ['./listar-tarifa.component.css']
})
export class ListarTarifaComponent implements OnInit {

  public listarTarifas: Observable<Tarifa[]>;

  constructor(protected tarifaService: TarifaService, private router: Router) { }

  ngOnInit() {
    this.listarTarifas = this.tarifaService.consultar();
    console.log(this.listarTarifas);
    
  }

  actualizarTarifa(tarifa: Tarifa) {
    this.tarifaService.tarifa = tarifa;
    this.router.navigate(["/tarifa/editar"]);
  }

}
