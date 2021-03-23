export class Propietario {
    id: number;
    nombre: string;
    numeroIdentificacion: string;
    telefono: string;
    correo: string;
    direccion: string;

    constructor(id: number, nombre: string, numeroIdentificacion: string, telefono: string, correo: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.numeroIdentificacion = numeroIdentificacion;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
    }
}
