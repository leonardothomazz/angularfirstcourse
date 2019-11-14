import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let OrdemCompraComponent = class OrdemCompraComponent {
    constructor() {
        this.endereco = '';
        this.numero = '10';
        this.complemento = '';
        this.formaPagamento = '';
    }
    ngOnInit() {
    }
    atualizaEndereco(endereco) {
        this.endereco = endereco;
        if (this.endereco.length > 3) {
            this.enderecoValido = true;
        }
        else {
            this.enderecoValido = false;
        }
    }
    atualizaNumero(numero) {
        this.numero = numero;
        if (this.numero.trim() != '' && this.numero.length > 0) {
            this.numeroValido = true;
        }
        else {
            this.numeroValido = false;
        }
    }
    atualizaComplemento(complemento) {
        this.complemento = complemento;
        if (this.complemento.trim() != '' && this.complemento.length > 0) {
            this.complementoValido = true;
        }
        else {
            this.complementoValido = false;
        }
    }
    atualizaFormaPagamento(formaPagamento) {
        this.formaPagamento = formaPagamento;
        if (this.formaPagamento.trim() != '') {
            this.formaPagamentoValido = true;
        }
        else {
            this.formaPagamentoValido = false;
        }
    }
};
OrdemCompraComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ordem-compra',
        templateUrl: './ordem-compra.component.html',
        styleUrls: ['./ordem-compra.component.css']
    })
], OrdemCompraComponent);
export { OrdemCompraComponent };
//# sourceMappingURL=ordem-compra.component.js.map