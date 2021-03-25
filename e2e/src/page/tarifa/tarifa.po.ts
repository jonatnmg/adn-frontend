import { by, element } from 'protractor';

export class TarifaPage {
    private linkCrearTarifa = element(by.id('linkCrearTarifa'));
    private linkListarTarifa = element(by.id('linkListarTarifa'));
    private botonRegistrar = element(by.id("registrar"));

    private inputAvaluoMinimo = element(by.id('avaluoMinimo'));
    private inputAvaluoMaximo = element(by.id('avaluoMaximo'));
    private inputTarifa = element(by.id('tarifa'));
    private inputAnio = element(by.id('anio'));
    private swal = element(by.className('swal2-html-container'));

    async clickBotonCrearTarifa() {
        await this.linkCrearTarifa.click();
    }

    async clickBotonListarTarifas() {
        await this.linkListarTarifa.click();
    }

    async ingresarAvaluoMinimo(avaluoMinimo) {
        await this.inputAvaluoMinimo.sendKeys(avaluoMinimo);
    }

    async ingresarInputAvaluoMaximo(avaluoMaximo) {
        await this.inputAvaluoMaximo.sendKeys(avaluoMaximo);
    }

    async ingresarInputTarifa(tarifa) {
        await this.inputTarifa.sendKeys(tarifa);
    }

    async ingresarInputAnio(anio) {
        await this.inputAnio.sendKeys(anio);
    }

    async clickBotonRegistrar() {
        await this.botonRegistrar.click();
    }

    async getTextoSwal(): Promise<string> {
        return await this.swal.getText();
    }

}
