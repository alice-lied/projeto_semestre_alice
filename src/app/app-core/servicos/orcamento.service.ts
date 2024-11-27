import { Injectable } from '@angular/core';
import { Despesa } from '../model/despesa';
import { Renda } from '../model/renda';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  private listaDeDespesas: Despesa[] = [];
  private listaDeGanhos: Renda[] = [];

  constructor() {}

}
