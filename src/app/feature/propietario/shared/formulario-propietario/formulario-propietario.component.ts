import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PropietarioService } from '../service/propietario.service';

@Component({
  selector: 'app-formulario-propietario',
  templateUrl: './formulario-propietario.component.html'
})
export class FormularioPropietarioComponent implements OnInit {
  
  @Input() propietarioForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonGuardar = new EventEmitter();

  constructor(protected propietarioService: PropietarioService, private router: Router) { }

  ngOnInit() {
  }

  regresar(): void {
    this.propietarioService.propietario = null;
    this.router.navigate(["propietario"]);
  }

  realizarAccionBotonGuardar() {
    if(this.propietarioForm.valid){
      this.eventoBotonGuardar.emit(this.propietarioForm);
    }
  }

}
