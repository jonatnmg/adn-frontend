export class Tarifa {
    id: number;
    avaluoMinimo: number;
    avaluoMaximo: number;
    tarifa: number;
    anio: number;

    constructor(id: number, avaluoMinimo: number, avaluoMaximo: number, valor:number, anio:number ) {
        this.id = id;
        this.avaluoMinimo = avaluoMinimo;
        this.avaluoMaximo = avaluoMaximo;
        this.tarifa = valor;
        this.anio = anio;
    }
}