import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { registerLocaleData } from '@angular/common';
import { DescricaoReduzida } from './shared/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            TopoComponent,
            HomeComponent,
            RodapeComponent,
            RestaurantesComponent,
            DiversaoComponent,
            OfertaComponent,
            ComoUsarComponent,
            OndeFicaComponent,
            DescricaoReduzida, OrdemCompraComponent
        ],
        imports: [
            BrowserModule,
            HttpModule,
            RouterModule.forRoot(ROUTES)
        ],
        providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
registerLocaleData(localePt);
//# sourceMappingURL=app.module.js.map