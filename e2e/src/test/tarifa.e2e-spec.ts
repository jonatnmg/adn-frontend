import { browser, by, element, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';
import { TarifaPage } from '../page/tarifa/tarifa.po';

describe('Listar tarifas', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let tarifa: TarifaPage;
    const valorInicial = "$0";

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        tarifa = new TarifaPage();
    });

    /*it('Deberia crear producto', () => {
        const ID_PRODUCTO = '001';
        const DESCRIPCION_PRODUCTO = 'Producto de pruebas';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarId(ID_PRODUCTO);
        producto.ingresarDescripcion(DESCRIPCION_PRODUCTO);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });*/

    it('Deberia listar tarifas', () => {
        page.navigateTo();
        navBar.clickBotonTarifa();

        expect(element(by.css('app-root #avaluoInicial'))).toEqual(valorInicial);
    });
});
