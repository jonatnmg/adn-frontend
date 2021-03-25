import { by, element } from 'protractor';

export class PropietarioPage {
    private linkCrear = element(by.id('linkCrearPropietario'));
    private linkListar = element(by.id('linkListarPropietario'));
    private botonRegistrar = element(by.id("registrar"));

    private inputNombre = element(by.id('nombre'));
    private inputNumeroIdentificacion = element(by.id('numeroIdentificacion'));
    private inputTelefono = element(by.id('telefono'));
    private inputCorreo = element(by.id('correo'));
    private inputDireccion = element(by.id('direccion'));
    private swal = element(by.className('swal2-html-container'));

    async clickBotonCrear() {
        await this.linkCrear.click();
    }

    async clickBotonListar() {
        await this.linkListar.click();
    }

    async ingresarInputNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarInputNumeroIdentificacion(numeroIdentificacion) {
        await this.inputNumeroIdentificacion.sendKeys(numeroIdentificacion);
    }

    async ingresarInputTelefono(telefono) {
        await this.inputTelefono.sendKeys(telefono);
    }

    async ingresarInputCorreo(correo) {
        await this.inputCorreo.sendKeys(correo);
    }

    async ingresarInputDireccion(direccion) {
        await this.inputDireccion.sendKeys(direccion);
    }

    async clickBotonRegistrar() {
        await this.botonRegistrar.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }
}
