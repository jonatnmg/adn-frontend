import { Propietario } from "@propietario/shared/model/propietario";

export class Inmueble {
    
    id: number;
    numeroPredial: number;
    direccion: string;
    areaTotal: number;
    areaConstruida: number;
    avaluoCatastral: number;
    idPropietario: number;
    propietario: Propietario;

    constructor(id: number,  numeroPredial: number,  direccion: string, areaTotal: number, areaConstruida: number, avaluoCatastral: number, idPropietario: number) {
        this.id = id;
        this.numeroPredial = numeroPredial;
        this.direccion = direccion;
        this.areaTotal = areaTotal;
        this.areaConstruida = areaConstruida;
        this.avaluoCatastral = avaluoCatastral;
        this.idPropietario = idPropietario;
    }
}