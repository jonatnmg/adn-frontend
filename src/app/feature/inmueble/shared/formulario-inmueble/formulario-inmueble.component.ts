import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Propietario } from "@propietario/shared/model/propietario";
import { PropietarioService } from "@propietario/shared/service/propietario.service";
import { Observable } from "rxjs";
import { InmuebleService } from "../service/inmueble.service";

@Component({
  selector: 'app-formulario-inmueble',
  templateUrl: './formulario-inmueble.component.html',
  styleUrls: ['./formulario-inmueble.component.css']
})
export class FormularioInmuebleComponent implements OnInit {

  @Input() inmuebleForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonGuardar = new EventEmitter();

  public listaPropietario: Observable<Propietario[]>;

  constructor(protected inmuebleService: InmuebleService,
    protected propietarioService: PropietarioService,
    private router: Router) { }

  ngOnInit() {
  }

  regresar(): void {
    this.inmuebleService.inmueble = null;
    this.router.navigate(["inmueble"]);
  }

  realizarAccionBotonGuardar() {
    if (this.inmuebleForm.valid) {
      this.eventoBotonGuardar.emit(this.inmuebleForm);
    }
  }

  buscarPropietarioNumeroIdentificacion(e) {
    console.log('Esto se ha ejecutado');
    console.log(e.target.value);
    let numeroIdentificacion = e.target.value;
    this.listaPropietario = this.propietarioService.consultarPropietarioPorNumeroIdentificacion(numeroIdentificacion);
    console.log(this.listaPropietario);    
  }

}
