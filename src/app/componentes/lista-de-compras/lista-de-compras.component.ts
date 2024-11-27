import { Component } from '@angular/core';
import {ComprasService} from '../../app-core/servicos/compras.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Produto} from '../../app-core/model/produto';


@Component({
  selector: 'app-lista-de-compras',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lista-de-compras.component.html',
  styleUrl: './lista-de-compras.component.css'
})
export class ListaDeComprasComponent {
  /** form usado no HTML */
  form: FormGroup = new FormGroup({});

  /** Service da lista de compras */
  constructor(private comprasService: ComprasService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      prioridade: ['', Validators.required],
    })

  }

  /** Depois de preencher o formulário no HTML e clicar no botão de salvar, aciona a função */
  addProduto(){

    /** instancia um produto novo com as informações do formulário */
    let produto = new Produto(
      this.form.get('nome')?.value,
      this.form.get('preco')?.value,
      this.form.get('prioridade')?.value);

    /** Passa o objeto recém criado como parâmetro no método do serviço */
    this.comprasService.addProduto(produto)
  }

}
