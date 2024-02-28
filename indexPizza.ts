import { Sabores } from "./sabores"
import { Pizza } from "./Pizza"

const pizza1 = new Pizza(Sabores.queijo, "Grande", 35)
const pizza2 = new Pizza(Sabores.calabresa, "Média", 30)
const pizza3 = new Pizza(Sabores.coracao, "Família", 40)
const pizza4 = new Pizza(Sabores.bacon, "Família", 40)



console.log(pizza1.descricao())
console.log(pizza2.descricao())
console.log(pizza3.descricao())
console.log(pizza4.descricao())