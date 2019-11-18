import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controles de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  //estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  //controlar botão confirmar compra
  public formEstado: string = 'disabled';

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length >= 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();

  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;
    
    if (this.numero.trim() != '' && this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();

  }

  public atualizaComplemento(complemento: string) : void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    console.log(this.complemento)
    
    if (this.complemento.trim() != '' && this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
    
    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string) : void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;
    
    if (this.formaPagamento.trim() != '') {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();

  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
    
  }

}
