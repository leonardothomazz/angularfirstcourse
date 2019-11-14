import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
let OfertasService = class OfertasService {
    constructor(http) {
        this.http = http;
    }
    getOfertas() {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta) => resposta.json());
    }
    getOfertasPorCategoria(categoria) {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta.json());
    }
    getOfertasPorId(id) {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta) => {
            return resposta.json()[0];
        });
    }
    getComoUsarOfertaPorId(id) {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta) => {
            return resposta.json()[0].descricao;
        });
    }
    getOndeFicaOfertaPorId(id) {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta) => {
            return resposta.json()[0].descricao;
        });
    }
    pesquisaOfertas(termo) {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(map((resposta) => resposta.json()), retry(10));
    }
};
OfertasService = tslib_1.__decorate([
    Injectable()
], OfertasService);
export { OfertasService };
//# sourceMappingURL=ofertas.service.js.map