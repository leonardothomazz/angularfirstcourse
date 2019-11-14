import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../../ofertas.service';
let ComoUsarComponent = class ComoUsarComponent {
    constructor(route, ofertasService) {
        this.route = route;
        this.ofertasService = ofertasService;
        this.comoUsar = '';
    }
    ngOnInit() {
        this.route.parent.params.subscribe((parametros) => {
            this.ofertasService.getComoUsarOfertaPorId(parametros.id)
                .then((descricao) => {
                this.comoUsar = descricao;
            });
        });
    }
};
ComoUsarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-como-usar',
        templateUrl: './como-usar.component.html',
        styleUrls: ['./como-usar.component.css'],
        providers: [OfertasService]
    })
], ComoUsarComponent);
export { ComoUsarComponent };
//# sourceMappingURL=como-usar.component.js.map