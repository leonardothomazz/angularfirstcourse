import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
let OfertaComponent = class OfertaComponent {
    constructor(route, ofertasService) {
        this.route = route;
        this.ofertasService = ofertasService;
    }
    ngOnInit() {
        this.route.parent.params.subscribe((parametros) => {
        });
        this.route.params.subscribe((parametros) => {
            this.ofertasService.getOfertasPorId(parametros.id)
                .then((oferta) => {
                this.oferta = oferta;
            });
        });
    }
    ngOnDestroy() {
    }
};
OfertaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-oferta',
        templateUrl: './oferta.component.html',
        styleUrls: ['./oferta.component.css'],
        providers: [OfertasService]
    })
], OfertaComponent);
export { OfertaComponent };
//# sourceMappingURL=oferta.component.js.map