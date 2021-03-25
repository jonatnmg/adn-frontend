import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkTarifa = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkPropietario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkInmueble = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkPagos = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));

    async clickBotonTarifa() {
        await this.linkTarifa.click();
    }

    async clickBotonPropietario() {
        await this.linkPropietario.click();
    }

    async clickBotonInmueble() {
        await this.linkInmueble.click();
    }

    async clickBotonPagos() {
        await this.linkPagos.click();
    }
}
