import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/ofertas.model';
import { switchMap, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  private subjectPesquisa: Subject<string> = new Subject<string>();    

  constructor(private _ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa 
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((termo: string) => {

        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this._ofertasService.pesquisaOfertas(termo);
      }),
      catchError ((err: any) => {
        return of<Oferta[]>([])
      })
    ) 
}

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa() : void {
    this.subjectPesquisa.next('');
  }

}
