import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
let RestaurantesComponent = class RestaurantesComponent {
    constructor(ofertasService) {
        this.ofertasService = ofertasService;
    }
    ngOnInit() {
        this.ofertasService.getOfertasPorCategoria('restaurante')
            .then((ofertas) => {
            this.ofertas = ofertas;
        });
    }
};
RestaurantesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-restaurantes',
        templateUrl: './restaurantes.component.html',
        styleUrls: ['./restaurantes.component.css'],
        providers: [OfertasService]
    })
], RestaurantesComponent);
export { RestaurantesComponent };
//# sourceMappingURL=restaurantes.component.js.map