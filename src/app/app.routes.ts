import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from './componentes/pagina-inicial/pagina-inicial.component';
import {OrcamentoComponent} from './componentes/orcamento/orcamento.component';
import {ListaDeComprasComponent} from './componentes/lista-de-compras/lista-de-compras.component';

export const routes: Routes = [
  { path: "", redirectTo: "pagina-inicial", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "orcamento", component: OrcamentoComponent },
  { path: "lista-de-compras", component: ListaDeComprasComponent },
];
