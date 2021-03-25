
import { AppPage } from '../app.po';
import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { TarifaPage } from '../page/tarifa/tarifa.po';

describe('TARIFAS', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let tarifaPage: TarifaPage;
  
    const TARIFA_CREADA_CORRECTAMENTE = "Tarifa creada correctamente";

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        tarifaPage = new TarifaPage();
    });


    it('Crear tarifa', () => {
        page.navigateTo();
        navBar.clickBotonTarifa();
        browser.sleep(2000);
        tarifaPage.clickBotonCrearTarifa();

        const AVALUO_MINIMO = 0;
        const AVALUO_MAXIMO = 128000000;
        const ANIO = 2021;
        const TARIFA = 5.2;

        tarifaPage.ingresarAvaluoMinimo(AVALUO_MINIMO);
        tarifaPage.ingresarInputAvaluoMaximo(AVALUO_MAXIMO);
        tarifaPage.ingresarInputAnio(ANIO);
        tarifaPage.ingresarInputTarifa(TARIFA);
        browser.sleep(500);

        tarifaPage.clickBotonRegistrar();

        //assert
        const alerta = tarifaPage.getTextoSwal();

        expect(alerta).toEqual(TARIFA_CREADA_CORRECTAMENTE);
        browser.sleep(300);

    });
});
