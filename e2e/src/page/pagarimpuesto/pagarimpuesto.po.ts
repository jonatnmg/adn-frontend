import { by, element } from 'protractor';

export class PagarImpuestoPredialPage {
    private linkListar = element(by.id('linkListarPagoImpuestoPredial'));
    private linkConsultar = element(by.id('linkConsultarPagoImpuestoPredial'));

    private botonRegistrar = element(by.id("registrar"));
    private botonConsultarPagosPendientes = element(by.id("btnConsultar"));

    private inputNumeroPredialBuscar = element(by.id('numeroPredial'));

    private inputFecha = element(by.id('fecha'));
    private inputValorPagado = element(by.id('valorPagado'));
    private inputAnio = element(by.id('anio'));
    private inputValorImpuestoReal = element(by.id('valorImpuestoReal'));
    private inputNumeroIdentificacionPropietario = element(by.id('numeroIdentificacionPropietario'));
    private inputNombrePropietario = element(by.id('nombrePropietario'));
    private inputNumeroPredial = element(by.id('numeroPredial'));
    private inputDireccion = element(by.id('direccion'));

    private swal = element(by.className('swal2-html-container'));

    async clickBotonConsultar() {
        await this.linkConsultar.click();
    }

    async clickBotonListar() {
        await this.linkListar.click();
    }

    async ingresarInputNumeroPredialBuscar(numeroPredialBuscar) {
        await this.inputNumeroPredialBuscar.sendKeys(numeroPredialBuscar);
    }

    async ingresarInputFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }

    async ingresarInputValorPagado(valorPagado) {
        await this.inputValorPagado.sendKeys(valorPagado);
    }

    async ingresarInputNumeroIdentificacionPropietario(identificacionPropietario) {
        await this.inputNumeroIdentificacionPropietario.sendKeys(identificacionPropietario);
    }

    async ingresarInputAnio(anio) {
        await this.inputAnio.sendKeys(anio);
    }

    async ingresarInputValorImpuestoReal(valorImpuestoReal) {
        await this.inputValorImpuestoReal.sendKeys(valorImpuestoReal);
    }

    async ingresarInputNombrePropietario(nombrePropietario) {
        await this.inputNombrePropietario.sendKeys(nombrePropietario);
    }

    async ingresarInputNumeroPredial(numeroPredial) {
        await this.inputNumeroPredial.sendKeys(numeroPredial);
    }

    async ingresarInputDireccion(direccion) {
        await this.inputDireccion.sendKeys(direccion);
    }

    async clickBotonRegistrar() {
        await this.botonRegistrar.click();
    }

    async clickBotonConsultarPagosPendientes() {
        await this.botonConsultarPagosPendientes.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }

}
