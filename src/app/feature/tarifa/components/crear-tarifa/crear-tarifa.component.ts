import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TarifaService } from '@tarifa/shared/service/tarifa.service';
import { Router } from "@angular/router";

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const TARIFA_CREADA_CORRECTAMENTE = "Tarifa creada correctamente";

@Component({
  selector: 'app-crear-tarifa',
  templateUrl: './crear-tarifa.component.html',
  styleUrls: ['./crear-tarifa.component.css']
})
export class CrearTarifaComponent implements OnInit {

  tarifaForm: FormGroup;
  constructor(protected tarifaService: TarifaService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioTarifa();
  }

  regresar(): void {
    this.router.navigate(["tarifa/listar"]);
  }

  guardarTarifa(tarifaFormulario: FormGroup) {
    this.tarifaService.guardar(tarifaFormulario.value).subscribe(
      () => {
        alert(TARIFA_CREADA_CORRECTAMENTE);
        this.regresar();
      },
      (error) => console.log(error)      
    );
  }

  private construirFormularioTarifa() {
    this.tarifaForm = new FormGroup({
      id: new FormControl(0),
      avaluoMinimo: new FormControl(null, Validators.required),
      avaluoMaximo: new FormControl(null, Validators.required),
      tarifa: new FormControl(null, Validators.required),
      anio: new FormControl(null, [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO)])
    });
  }

}
