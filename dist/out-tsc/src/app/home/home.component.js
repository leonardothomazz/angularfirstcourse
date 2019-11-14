import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
let HomeComponent = class HomeComponent {
    constructor(ofertasService) {
        this.ofertasService = ofertasService;
    }
    ngOnInit() {
        this.ofertasService.getOfertas()
            .then((ofertas) => {
            this.ofertas = ofertas;
        })
            .catch((param) => {
            console.log(param);
        });
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [OfertasService]
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map