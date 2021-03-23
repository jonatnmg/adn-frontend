import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { TarifaService } from "../service/tarifa.service";

@Component({
  selector: 'app-formulario-tarifa',
  templateUrl: './formulario-tarifa.component.html',
  styleUrls: ['./formulario-tarifa.component.css']
})
export class FormularioTarifaComponent implements OnInit {

  @Input() tarifaForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonGuardar = new EventEmitter();

  constructor(protected tarifaService: TarifaService, private router: Router) { }

  ngOnInit() {
  }

  regresar(): void {
    this.tarifaService.tarifa = null;
    this.router.navigate(["tarifa/listar"]);
  }

  realizarAccionBotonGuardar() {
    if(this.tarifaForm.valid){
      this.eventoBotonGuardar.emit(this.tarifaForm);
    }
  }

}
