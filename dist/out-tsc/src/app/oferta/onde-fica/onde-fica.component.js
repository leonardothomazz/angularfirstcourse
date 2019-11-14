import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../../ofertas.service';
let OndeFicaComponent = class OndeFicaComponent {
    constructor(route, ofertasService) {
        this.route = route;
        this.ofertasService = ofertasService;
        this.ondeFica = '';
    }
    ngOnInit() {
        this.route.parent.params.subscribe((parametros) => {
            this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
                .then((descricao) => {
                this.ondeFica = descricao;
            });
        });
    }
};
OndeFicaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-onde-fica',
        templateUrl: './onde-fica.component.html',
        styleUrls: ['./onde-fica.component.css'],
        providers: [OfertasService]
    })
], OndeFicaComponent);
export { OndeFicaComponent };
//# sourceMappingURL=onde-fica.component.js.map