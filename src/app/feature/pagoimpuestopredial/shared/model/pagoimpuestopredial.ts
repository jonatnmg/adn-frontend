import { Inmueble } from "@inmueble/shared/model/inmueble";
import { Propietario } from "@propietario/shared/model/propietario";
import { Tarifa } from "@tarifa/shared/model/tarifa";

export class PagoImpuestoPredial {

    id: number;
    propietario: Propietario;
    inmueble: Inmueble;
    tarifa: Tarifa;
    anio: number;
    valorPagado: number;
    fecha: string;

    constructor(id: number, propietario: Propietario, inmueble: Inmueble, tarifa: Tarifa, anio: number, valorPagado: number, fecha: string) {
        this.id = id;
        this.propietario = propietario;
        this.inmueble = inmueble;
        this.tarifa = tarifa;
        this.anio = anio;
        this.valorPagado = valorPagado;
        this.fecha = fecha;
    }
}