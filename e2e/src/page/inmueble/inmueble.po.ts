import { by, element } from 'protractor';

export class InmueblePage {
    private linkCrear = element(by.id('linkCrearInmueble'));
    private linkListar = element(by.id('linkListarInmueble'));
    private botonRegistrar = element(by.id("registrar"));

    private inputNumeroPredial = element(by.id('numeroPredial'));
    private inputAvaluoCatastral = element(by.id('avaluoCatastral'));
    private inputDireccion = element(by.id('direccion'));
    private inputAreaTotal = element(by.id('areaTotal'));
    private inputAreaConstruida = element(by.id('areaConstruida'));
    private inputNumeroIdentificacionPropietario = element(by.id('numeroIdentificacionPropietario'));
    private inputNombrePropietario = element(by.id('nombrePropietario'));
    private inputIdPropietario = element(by.id('idPropietario')); 

    private swal = element(by.className('swal2-html-container'));

    async clickBotonCrear() {
        await this.linkCrear.click();
    }

    async clickBotonListar() {
        await this.linkListar.click();
    }

    async ingresarInputNumeroPredial(numeroPredial) {
        await this.inputNumeroPredial.sendKeys(numeroPredial);
    }

    async ingresarInputAvaluoCatastral(avaluoCatastral) {
        await this.inputAvaluoCatastral.sendKeys(avaluoCatastral);
    }

    async ingresarInputAreaTotal(areaTotal) {
        await this.inputAreaTotal.sendKeys(areaTotal);
    }

    async ingresarInputAreaConstruida(areaConstruida) {
        await this.inputAreaConstruida.sendKeys(areaConstruida);
    }

    async ingresarInputDireccion(direccion) {
        await this.inputDireccion.sendKeys(direccion);
    }

    async ingresarInputNumeroIdentificacionPropietario(numeroIdentificacionPropietario) {
        await this.inputNumeroIdentificacionPropietario.sendKeys(numeroIdentificacionPropietario);
    }

    async ingresarInputNombrePropietario(nombrePropietario) {
        await this.inputNombrePropietario.sendKeys(nombrePropietario);
    }

    async ingresarInputIdPropietario(idPropietario) {
        await this.inputIdPropietario.sendKeys(idPropietario);
    }

    async clickBotonRegistrar() {
        await this.botonRegistrar.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }
}
