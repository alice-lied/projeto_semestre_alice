import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private listaDeCompras: Produto[] = [];

  constructor() {}

  public addProduto(produto: Produto) {

    this.listaDeCompras.push(produto);
    console.log('Produto cadastrado!', produto);

  }

  public getProdutos(){
    return this.listaDeCompras;
  }

}
