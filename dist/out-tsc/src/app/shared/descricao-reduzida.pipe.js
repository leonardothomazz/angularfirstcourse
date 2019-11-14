import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let DescricaoReduzida = class DescricaoReduzida {
    transform(texto, truncarEm) {
        if (texto.length > truncarEm) {
            return texto.substr(0, truncarEm) + '...';
        }
        return texto;
    }
};
DescricaoReduzida = tslib_1.__decorate([
    Pipe({
        name: 'descricaoReduzida'
    })
], DescricaoReduzida);
export { DescricaoReduzida };
//# sourceMappingURL=descricao-reduzida.pipe.js.map