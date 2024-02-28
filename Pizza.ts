import { Sabores } from "./sabores"

export class Pizza {
  constructor(public sabor: Sabores, public tamanho: string, public preco: number) {}

  descricao(): string {
    return `Pizza (${this.sabor} Tamanho: ${this.tamanho} Preço: R$ ${this.preco})`
  }
}