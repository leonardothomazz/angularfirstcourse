import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
let DiversaoComponent = class DiversaoComponent {
    constructor(ofertasService) {
        this.ofertasService = ofertasService;
    }
    ngOnInit() {
        this.ofertasService.getOfertasPorCategoria('diversao')
            .then((ofertas) => {
            this.ofertas = ofertas;
        });
    }
};
DiversaoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-diversao',
        templateUrl: './diversao.component.html',
        styleUrls: ['./diversao.component.css'],
        providers: [OfertasService]
    })
], DiversaoComponent);
export { DiversaoComponent };
//# sourceMappingURL=diversao.component.js.map