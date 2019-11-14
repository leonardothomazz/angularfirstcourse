import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Subject, of } from 'rxjs';
import { switchMap, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';
let TopoComponent = class TopoComponent {
    constructor(_ofertasService) {
        this._ofertasService = _ofertasService;
        this.subjectPesquisa = new Subject();
    }
    ngOnInit() {
        this.ofertas = this.subjectPesquisa
            .pipe(debounceTime(1000))
            .pipe(distinctUntilChanged())
            .pipe(switchMap((termo) => {
            if (termo.trim() === '') {
                //retornar um observable de array de ofertas vazio
                return of([]);
            }
            return this._ofertasService.pesquisaOfertas(termo);
        }), catchError((err) => {
            return of([]);
        }));
    }
    pesquisa(termoDaBusca) {
        this.subjectPesquisa.next(termoDaBusca);
    }
    limpaPesquisa() {
        this.subjectPesquisa.next('');
    }
};
TopoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-topo',
        templateUrl: './topo.component.html',
        styleUrls: ['./topo.component.css'],
        providers: [OfertasService]
    })
], TopoComponent);
export { TopoComponent };
//# sourceMappingURL=topo.component.js.map