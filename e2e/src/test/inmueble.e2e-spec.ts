
import { AppPage } from '../app.po';
import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { InmueblePage } from '../page/inmueble/inmueble.po';

describe('INMUEBLES', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let inmueblePage: InmueblePage;

    const INMUEBLE_CREADO_CORRECTAMENTE = "Inmueble creado correctamente";

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        inmueblePage = new InmueblePage();
    });


    it('Crear inmueble', () => {
        page.navigateTo();
        navBar.clickBotonInmueble();
        browser.sleep(2000);
        inmueblePage.clickBotonCrear();

        const NUMERO_PREDIAL = 123599446;
        const AVALUO_CATASTRAL = 45000000;
        const DIRECCION = "Direccion test";
        const AREA_TOTAL = 120;
        const AREA_CONSTRUIDA = 110;
        const NUMERO_IDENTIFICACION = "14522";

        inmueblePage.ingresarInputNumeroIdentificacionPropietario(NUMERO_IDENTIFICACION);
        inmueblePage.ingresarInputNumeroPredial(NUMERO_PREDIAL);
        browser.sleep(2000);
        inmueblePage.ingresarInputAvaluoCatastral(AVALUO_CATASTRAL);
        inmueblePage.ingresarInputDireccion(DIRECCION);
        inmueblePage.ingresarInputAreaConstruida(AREA_CONSTRUIDA);
        inmueblePage.ingresarInputAreaTotal(AREA_TOTAL);


        inmueblePage.clickBotonRegistrar();
        browser.sleep(300);

        //assert
        const alerta = inmueblePage.getTextoSwal();

        expect(alerta).toEqual(INMUEBLE_CREADO_CORRECTAMENTE);
        browser.sleep(300);
    });
});
