/** O produto é usado na aba de lista de compras */
export class Produto {

  Nome: string;
  Preco: number;
  Prioridade: number;

  constructor(Nome: string, Preco: number, Prioridade: number) {
    this.Nome = Nome;
    this.Preco = Preco;
    this.Prioridade = Prioridade;
  }

}
