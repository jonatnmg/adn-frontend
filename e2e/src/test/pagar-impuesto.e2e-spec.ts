
import { AppPage } from '../app.po';
import { browser, by, element } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { PagarImpuestoPredialPage } from '../page/pagarimpuesto/pagarimpuesto.po';

describe('Impuesto predial', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pagarImpuestoPredialPage: PagarImpuestoPredialPage;

    const PAGO_REALIZADO_CORRECTAMENTE = "Pago realizado correctamente";
    const NUMERO_PREDIAL_BUSQUEDA = 222222;
    const ID_PAGO_PENDIENTE = "pagoPendiente1";
    const VALOR_A_PAGAR = 162400;
    const FECHA_PAGO = "05/06/2021";

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pagarImpuestoPredialPage = new PagarImpuestoPredialPage();
    });


    it('Pagar impuesto predial', async () => {
        page.navigateTo();
        navBar.clickBotonPagos();
        browser.sleep(2000);
        pagarImpuestoPredialPage.clickBotonConsultar();
        pagarImpuestoPredialPage.ingresarInputNumeroPredialBuscar(NUMERO_PREDIAL_BUSQUEDA);
        pagarImpuestoPredialPage.clickBotonConsultarPagosPendientes();

        browser.sleep(5000);

        const primerElementoPagPendiente = element(by.id(ID_PAGO_PENDIENTE));
        await primerElementoPagPendiente.click();

        browser.sleep(800);

        pagarImpuestoPredialPage.ingresarInputFecha(FECHA_PAGO);
        pagarImpuestoPredialPage.ingresarInputValorPagado(VALOR_A_PAGAR);

        pagarImpuestoPredialPage.clickBotonRegistrar();
        browser.sleep(300);

        //assert
        const alerta = pagarImpuestoPredialPage.getTextoSwal();

        expect(alerta).toEqual(PAGO_REALIZADO_CORRECTAMENTE);
        browser.sleep(300);

    });
});
