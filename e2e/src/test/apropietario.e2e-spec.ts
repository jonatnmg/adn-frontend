
import { AppPage } from '../app.po';
import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { PropietarioPage } from '../page/propietario/propietario.po';

describe('PROPIETARIO ', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let propietarioPage: PropietarioPage;
  
    const PROPIETARIO_CREADO_CORRECTAMENTE = "Propietario creado correctamente";

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        propietarioPage = new PropietarioPage();
    });


    it('Crear propieario', () => {
        page.navigateTo();
        navBar.clickBotonPropietario();
        browser.sleep(2000);
        propietarioPage.clickBotonCrear();

        const NOMBRE = "NOMBRE TEST";
        const NUMERO_IDENTIFICACION = "14238964";
        const TELEFONO = "3216666";
        const DIRECCION = "DIRECCION TEST";
        const CORREO = "CORREOTEST@default.com"

        propietarioPage.ingresarInputNombre(NOMBRE);
        propietarioPage.ingresarInputNumeroIdentificacion(NUMERO_IDENTIFICACION);
        propietarioPage.ingresarInputTelefono(TELEFONO);
        propietarioPage.ingresarInputDireccion(DIRECCION);
        propietarioPage.ingresarInputCorreo(CORREO);
        browser.sleep(500);

        propietarioPage.clickBotonRegistrar();

        //assert
        const alerta = propietarioPage.getTextoSwal();

        expect(alerta).toEqual(PROPIETARIO_CREADO_CORRECTAMENTE);
        browser.sleep(300);
    });
});
