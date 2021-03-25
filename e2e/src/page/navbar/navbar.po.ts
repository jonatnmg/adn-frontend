import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkTarifa = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkPropietario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonTarifa() {
        await this.linkTarifa.click();
    }

    async clickBotonPropietario() {
        await this.linkPropietario.click();
    }
}
